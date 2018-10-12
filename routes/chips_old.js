
// //const asyncMiddleware = require('../middleware/async'); 
// const auth = require('../middleware/auth');
// const admin = require('../middleware/admin');
// const { Chip, validate } = require('../models/chips'); //what returns + .Chip || .validate
// const { User } = require('../models/users');
// const mongoose = require('mongoose');
// const express = require('express');
// const router = express.Router();


// // Get Chips
// router.get('/', auth, async (req, res) => {
//     const chips = await User.findById(req.user._id)
//         .limit(20)
//         .populate('chips')
//         .select('chips');
//     if (!chips) return res.status(404).send('The user with the given TOKEN not found.');
//     res.send(chips.chips);
// });

// // Get Chip by id
// // TODO: Performance issue
// router.get('/:id', auth, async (req, res) => {
//     // Ensure chip id validation
//     const isValidId = mongoose.Types.ObjectId.isValid(req.params.id);
//     if (!isValidId) return res.status(400).send('The chip id is not a valid Object ID.');
//     // Ensure chip is exist
//     const user = User.findById(req.user._id);
//     if(!user) return res.status(404).send('The user with the given ID not found');
//     const chip = user.chips.id(req.params.id);
//     if (!chip) return res.status(404).send('The chip with the given ID not found.');
//     res.send(chip);
// });

// // Add chip to user + middleware function for checking auth
// router.post('/', auth, async (req, res) => {
//     // Ensure data validation using 'joi'
//     const { error } = validate(req.body);
//     if (error) return res.status(400).send(error.details[0].message);
//     // Create new chip
//     let user = await User.findById(req.user._id); //from json web token
//     if (!user) return res.status(404).send('The user with the given TOKEN not found.');
//     let chip = new Chip({
//         name: req.body.name,
//         admin: user._id,
//         action: req.body.action,
//         options: req.body.options || [],
//     });
//     // Add chip to current user chips
//     user.chips.push(chip);
//     // Save chip to DB
//     await user.save();
//     // Return the new chip to client
//     res.send(chip);
// });

// // Update chip
// router.put('/:id', auth, async (req, res) => {
//     // Ensure chip id validation
//     const isValidId = mongoose.Types.ObjectId.isValid(req.params.id);
//     if (!isValidId) return res.status(400).send('The chip id is not a valid Object ID.');
//     // Ensure date validation using 'joi'
//     const { error } = validate(req.body);
//     if (error) return res.status(400).send(error.details[0].message);
//     // Ensure chip is exist
//     const user = await User.findById(req.user._id);
//     if (!user) return res.status(404).send('The user with the given TOKEN not found.');
//     let chip = await user.chips.id(req.params.id);
//     if (!chip) return res.status(404).send('The chip with the given ID not found.');
//     // Update chip
//     chip.name = req.body.name;
//     chip.action = req.body.action;
//     chip.options = req.body.options || [];
//     chip.updatedAt = Date.now();
//     // Save to DB
//     await user.save();
//     res.send(chip);
// });

// // Delete chip
// router.delete('/:id', [auth, admin], async (req, res) => {
//     // Ensure chip id validation
//     const isValidId = mongoose.Types.ObjectId.isValid(req.params.id);
//     if (!isValidId) return res.status(400).send('The chip id is not a valid Object ID.');
//     // Ensure chip is exist
//     const user = await User.findById(req.user._id);
//     if (!user) return res.status(404).send('The user with the given TOKEN not found.');
//     const chip = await user.chips.id(req.params.id)
//     if (!chip) return res.status(404).send('The chip with the given ID not found.');
//     // Remove chip from user chips 
//     chip.remove();
//     // Save user to DB
//     await user.save();
//     // Return removed chip to client
//     res.send(chip);
// });

// module.exports = router;