
const { User } = require('../models/users'); //what returns + .Chip || .validate
const { transporter } = require('../startup/nodemailer');
const auth = require('../middleware/auth');
const Joi = require('joi');
const config = require('config');
const generator = require('generate-password');
const bcrypt = require('bcryptjs');
const _ = require('lodash');
const express = require('express');
const router = express.Router();

// Generic function for sending emails
function sendEmail(emailSubject, emailText, body, receivers) {
    // Setup email data with unicode symbols
    const mailOptions = {
        from: `"Smart Chip 👻" <${config.get('emailUser')}>`, // sender address
        to: receivers,//'bar@example.com, baz@example.com', // list of receivers
        subject: `${emailSubject} ✔`, // Subject line
        text: emailText, // plain text body
        html: body // html body
    };
    // Send mail with defined transport object
    return transporter().sendMail(mailOptions);
}

// Send reset password email
router.post('/password', async (req, res) => {
    // Ensure date validation using 'joi'
    const { error } = validatePassword(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    // Ensure user exist
    let user = await User.findOne({ email: req.body.email }); //from json web token
    if (!user) return res.status(404).send('The user with the given email not found.');
    // Generate temp password 
    const salt = await bcrypt.genSalt(10); //10 == how many time run the salt algo
    const tempPassword = generator.generate({
        length: 8,
        numbers: true
    });
    // Change User password 
    user.password = await bcrypt.hash(tempPassword, salt); //hash the password
    // Save User Changes to DB
    await user.save();
    // Send Mail To User
    const subject = 'Smartchip - Reset Password Request';
    const text = '';
    const body = `<h3>Your Password is: ${tempPassword}</h3>`;
    sendEmail(subject, text, body, req.body.email).
        then(() => res.send(`password sent to ${req.body.email}`));
});

// Send Contact Us email
router.post('/contact', auth, async (req, res) => {
    // Ensure date validation using 'joi'
    const { error } = validateContact(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    // Ensure user exist
    let user = await User.findById(req.user._id); //from json web token
    if (!user) return res.status(404).send('The user with the given email not found.');
    // Send Mail To User
    const subject = req.body.subject;
    const text = req.body.text;
    const body = `<h3>Text: ${text}</h3>`
    sendEmail(subject, text, body, config.get('emailUser')).
        then(() => res.send(`email sent to ${config.get('emailUser')}`));
});


// Validate contact 
function validateContact(req) {
    const schema = {
        subject: Joi.string().min(5).max(50).required(),
        text: Joi.string().min(5).max(1024).required()
    };

    return Joi.validate(req, schema);
}

// Validate password 
function validatePassword(req) {
    const schema = {
        email: Joi.string().min(5).max(255).required().email({ minDomainAtoms: 2 })
    };

    return Joi.validate(req, schema);
}

module.exports = router;