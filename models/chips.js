
const Joi = require('joi');
const mongoose = require('mongoose');

// Compile it into a 'moudle' (Class). 
//first param = collaction name (table name)
//second param = schema that define the shape of documents in that collction.
const chipSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50,
    },
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    action: {
        type: String,
        minlength: 5,
        maxlength: 1024,
        required: true
    },
    options: {
        type: Array,
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Chip = mongoose.model('Chip', chipSchema);

function validateChip(chip) {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        action: Joi.string().min(5).max(1024).required(),
        options: Joi.array().items(Joi.string()).optional()
    };

    return Joi.validate(chip, schema);
}

module.exports.chipSchema = chipSchema;
module.exports.Chip = Chip;
module.exports.validate = validateChip;
