
const express = require('express');
const users = require('../routes/users');
const chips = require('../routes/chips');
const auth = require('../routes/auth');
const error = require('../middleware/error');

module.exports = function (app) {
    // Configure the middlewares usedby the Express HTTP server object.
    app.use(express.json());
    app.use('/api/users', users); //login 
    app.use('/api/auth', auth);
    app.use('/api/chips', chips);
    app.use(error);//Express Error Middleware
}