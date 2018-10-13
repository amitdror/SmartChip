
//const asyncMiddleware = require('../middleware/async'); 
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const { Chip, validate } = require('../models/chips'); //what returns + .Chip || .validate
const { User } = require('../models/users');
const _ = require('lodash');
const mongoose = require('mongoose');
const Fawn = require('fawn');
const express = require('express');
const router = express.Router();

//Two face commit using 'fawn'
Fawn.init(mongoose);

// Get Chips
router.get('/', auth, async (req, res) => {
    // Ensure user exist
    const user = await User.findById(req.user._id)
        .populate('chips')
    //.select('chips');
    if (!user) return res.status(404).send('The user with the given TOKEN not found.');
    res.send(user.chips);
});

// Get Chip by id
router.get('/:id', async (req, res) => {
    // Ensure chip id validation
    const isValidId = mongoose.Types.ObjectId.isValid(req.params.id);
    if (!isValidId) return res.status(400).send('The chip id is not a valid Object ID.');
    // Ensure chip is exist
    const chip = await Chip.findById(req.params.id);
    if (!chip) return res.status(404).send('The chip with the given ID not found.');
    // Send chip 
    res.send(chip);
});

// Add chip to user
router.post('/', [auth, admin], async (req, res) => {
    // Ensure data validation using 'joi'
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    // Ensure user exist
    let user = await User.findById(req.user._id); //from json web token
    if (!user) return res.status(404).send('The user with the given TOKEN not found.');
    // Create new chip
    let chip = new Chip({
        name: req.body.name,
        admin: user._id,
        action: req.body.action,
        options: req.body.options || [],
    });
    // Save chip to DB + Add chip to current user chips
    new Fawn.Task()
        .save('chips', chip)
        .update('users', { _id: req.user._id }, { $push: { chips: { $ojFuture: "0._id" } } })
        .run({ useMongoose: true })
        .then(() => {
            res.send(chip);
        });
    // // Return the new chip to client
});

// Update chip
router.put('/:id', [auth, admin], async (req, res) => {
    // Ensure chip id validation
    const isValidId = mongoose.Types.ObjectId.isValid(req.params.id);
    if (!isValidId) return res.status(400).send('The chip id is not a valid Object ID.');
    // Ensure date validation using 'joi'
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    // Ensure chip is exist
    const user = await User.findById(req.user._id).populate('chips');
    console.log(user);
    if (!user) return res.status(404).send('The user with the given TOKEN not found.');
    const chip = user.chips.find((chip) => chip._id.equals(req.params.id));
    if (!chip) return res.status(404).send('The chip with the given ID not found.');
    // Update chip
    chip.name = req.body.name;
    chip.action = req.body.action;
    chip.options = req.body.options || [];
    chip.updatedAt = Date.now();
    // Save to DB
    await chip.save();
    // Return updated chip to user
    res.send(chip);
});

// Delete chip
router.delete('/:id', [auth, admin], async (req, res) => {
    // Ensure chip id validation
    const isValidId = mongoose.Types.ObjectId.isValid(req.params.id);
    if (!isValidId) return res.status(400).send('The chip id is not a valid Object ID.');
    // Ensure chip is exist
    const user = await User.findById(req.user._id).populate('chips');
    if (!user) return res.status(404).send('The user with the given TOKEN not found.');
    let chip = user.chips.find((chip) => chip._id.equals(req.params.id));
    if (!chip) return res.status(404).send('The chip with the given ID not found.');
    // Remove chip from user chips + Remove chip form DB
    new Fawn.Task()
        .remove('chips', { _id: chip._id })
        .update('users', { _id: req.user._id }, { $pull: { chips: { $in: [chip._id] } } })
        .run({ useMongoose: true })
        .then(() => {
            res.send(chip);
        });
    // Return removed chip to client
});

module.exports = router;