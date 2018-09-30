require('express-async-errors'); // can use ./middleware/asnyc insted
const winston = require('winston'); //default logger
require('winston-mongodb');
const config = require('config');
const mongoose = require('mongoose');
const error = require('./middleware/error');
const users = require('./routes/users');
const chips = require('./routes/chips');
const auth = require('./routes/auth');
const express = require('express');
const app = express();


//handle exception throwing in higher level
process.on('uncaughtException', (ex) => {
    console.log('WE GOT AN UNCAUGHT EXCEPTION')
    winston.error(ex.message, ex);
});

//handle promise exception
process.on('unhandledRejection', (ex) => {
    console.log('WE GOT AN UNHANDLED REJECTION')
    winston.error(ex.message, ex);
});

// Set logger output file
winston.add(winston.transports.File, {
    filename: 'logfile.log',
    level: 'info'
});
winston.add(winston.transports.MongoDB, {
    db: 'mongodb://localhost/smartchip',
    level: 'error'
});

if (!config.get('jwtPrivateKey')) {
    console.error('FATAL ERROR: jwtPrivateKey is not defined.')
    process.exit(1);//exit in error
}

// Create & Connect to DB... also return a promise ==> then + catch.
//TODO: read the connection string form file!
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.connect('mongodb://localhost/smartchip')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log('Could not connect to MongoDB...'));

// Configure the middlewares usedby the Express HTTP server object.
app.use(express.json());
app.use('/api/users', users); //login 
app.use('/api/auth', auth);
app.use('/api/chips', chips);
app.use(error);//Express Error Middleware

require('./startup/prod')(app);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));