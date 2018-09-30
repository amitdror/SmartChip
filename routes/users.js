
const auth = require('../middleware/auth');
const bcrypt = require('bcryptjs')
const _ = require('lodash')
const { User, validate } = require('../models/users'); //what returns + .Chip || .validate
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


router.get('/me', auth, async (req, res) => { //get user _id from json web token
    const user = await User.findById(req.user._id) //from out json web token
        .select({ password: 0, isAdmin: 0, __v: 0 });
        if (!user) return res.status(404).send('The user with the given TOKEN not found.');
    //.select('-password'); //without password
    res.send(user);
});

router.post('/', async (req, res) => {
    // Ensure date validation using 'joi'
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    // Ensure User not exist already
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send('User already registered.');
    // Create new user
    user = new User(_.pick(req.body, ['name', 'email', 'phone', 'password']));
    const salt = await bcrypt.genSalt(10) //10 == how many time run the salt algo
    user.password = await bcrypt.hash(user.password, salt); //hash the password
    // Save to DB
    await user.save();
    // Generate jwt auth token
    const token = user.generateAuthToken();
    // return new user to client
    res.header('x-auth-token', token).send(_.pick(user, ['_id', 'name', 'email', 'phone']));
});

module.exports = router;
