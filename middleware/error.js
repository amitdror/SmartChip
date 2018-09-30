
const winston = require('winston');

module.exports = function (err, req, res, next) {
    // Log the excption
    //Winston Login Level : error, warn, info, verbose, debug, silly
    winston.error(err.message, err);
    res.status(500).send(err.message); //internal server error
}