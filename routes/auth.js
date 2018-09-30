
const bcrypt = require('bcryptjs')
const _ = require('lodash')
const Joi = require('joi');
const { User } = require('../models/users'); //what returns + .Chip || .validate
const express = require('express');
const router = express.Router();

// Login - return json web token to client
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

function validate(req) {
    const schema = {
        email: Joi.string().min(3).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    };

    return Joi.validate(req, schema);
}

module.exports = router;
