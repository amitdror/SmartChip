
const config = require('config');
const winston = require('winston'); //default logger
require('winston-mongodb');
require('express-async-errors'); // can use ./middleware/asnyc insted


module.exports = function () {
    winston.handleExceptions(
        new winston.transports.Console({ colorize: true, prettyPrint: true }),
        new winston.transports.File({ filename: 'uncaughtException.log' })
    );

    //handle promise exception
    process.on('unhandledRejection', (ex) => {
        throw ex;
    });

    // Set logger output file
    winston.add(winston.transports.File, {
        filename: 'smartchip.log',
    });

    // winston.add(winston.transports.MongoDB, {
    //     db: config.get('db'),
    //     level: 'error'
    // });
};

//handle exception throwing in higher level
// process.on('uncaughtException', (ex) => {
//     //console.log('WE GOT AN UNCAUGHT EXCEPTION')
//     winston.error(ex.message, ex);
//     process.exit(1);
// });

// process.on('unhandledRejection', (ex) => {
//     console.log('WE GOT AN UNHANDLED REJECTION')
//     winston.error(ex.message, ex);
//     process.exit(1);
// }
