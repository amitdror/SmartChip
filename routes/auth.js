
const bcrypt = require('bcryptjs')
const Joi = require('joi');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const { User } = require('../models/users');
//const { User } = require('../models/users'); //what returns + .Chip || .validate
const express = require('express');
const router = express.Router();

// Login - return json web token to client in the header
router.post('/', async (req, res) => {
    // Ensure date validation using 'joi'
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    // Ensure User exist
    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Invalid email or password.'); //400 not 404
    // Ensure User password is valid
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Invalid email or password.'); //400 not 404
    // Generate jwt auth token
    const token = user.generateAuthToken();
    // return new user to client
    res.send(token);
});

// Change Password - return json web token to client in the header
router.put('/me', [auth, admin], async (req, res) => {
    // Ensure date validation using 'joi'
    const { error } = validatePassword(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    // Ensure User exist
    let user = await User.findById(req.user._id);
    if (!user) return res.status(404).send('The user with the given TOKEN not found.');
    // Ensure User password is valid
    const validPassword = await bcrypt.compare(req.body.oldPassword, user.password);
    if (!validPassword) return res.status(400).send('Invalid password.');
    // Hash user new password
    const salt = await bcrypt.genSalt(10) //10 == how many time run the salt algo
    user.password = await bcrypt.hash(req.body.newPassword, salt); //hash the password
    // Save to DB
    await user.save();
    res.send(user);
});

function validatePassword(req) {
    const schema = {
        oldPassword: Joi.string().min(8).max(255).required(),
        newPassword: Joi.string().min(8).max(255).required()
    };

    return Joi.validate(req, schema);
}

function validate(req) {
    const schema = {
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(8).max(255).required()
    };

    return Joi.validate(req, schema);
}

module.exports = router;
