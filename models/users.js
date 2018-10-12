
const config = require('config');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const mongoose = require('mongoose');
const { chipSchema, Chip } = require('./chips');

// Compile it into a 'moudle' (Class). 
//first param = collaction name (table name)
//second param = schema that define the shape of documents in that collction.
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50,
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        match: /\d{3}-\d{7}/,
        phone: true,
        // unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 1024,
    },
    chips: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Chip'
        }],
        validate: function (v) {
            return v && v.length < 20;
        },
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: true
    },
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, config.get('jwtPrivateKey'));
    return token;
}

const User = mongoose.model('User', userSchema);


function validateNewUser(user) {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(3).max(255).required().email({ minDomainAtoms: 2 }),
        phone: Joi.string().required().regex(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/),//regex(/\d{3}-\d{7}/),
        password: Joi.string().min(8).max(255).required()
    };

    return Joi.validate(user, schema);
}

function validateUser(user) {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(3).max(255).required().email({ minDomainAtoms: 2 }),
        phone: Joi.string().required().regex(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/),//regex(/\d{3}-\d{7}/),
    };

    return Joi.validate(user, schema);
}

module.exports.User = User;
module.exports.validate = validateNewUser;
module.exports.validateUser = validateUser;
