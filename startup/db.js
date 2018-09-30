
const winston = require('winston');
const mongoose = require('mongoose');
const config = require('config');

module.exports = function () {
    // Create & Connect to DB... also return a promise ==> then + catch.
    mongoose.set('useCreateIndex', true);
    mongoose.set('useNewUrlParser', true);
    //mongoose.connect('mongodb://localhost/smartchip')
    mongoose.connect(config.get('db'))    
        .then(() => winston.info('Connected to MongoDB...'))
        //.catch(err => console.log('Could not connect to MongoDB...'));
}



