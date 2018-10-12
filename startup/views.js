
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');
const express = require('express');


module.exports = function (app) {
    // View engine setup
    app.engine('handlebars', exphbs());
    app.set('view engine', 'handelbars');
    // Body Parser Middleware
    app.use(bodyParser.urlencoded({ extended: false }));
    // Static folder
    app.unsubscribe('/public', express.static(path.join(__dirname, 'public')));


    app.get('/', (req, res)=>{
        res.render('contact');
    });

}