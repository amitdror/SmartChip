
const config = require('config');
const nodemailer = require('nodemailer');

let transporter;

//Nodemailer initialize
module.exports = function () {
    // create reusable transporter object using the default SMTP transport
    transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: config.get('emailUser'), // generated ethereal user
            pass: config.get('emailPassword') // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    });
};

function getTransporter() {
    return transporter
};

module.exports.transporter = getTransporter;

