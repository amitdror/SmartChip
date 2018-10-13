
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const express = require('express');

module.exports = function (app) {
  // View engine setup
  app.engine('handlebars', exphbs());
  app.set('view engine', 'handlebars');
  // Body Parser Middleware
  app.use(bodyParser.urlencoded({ extended: false }));
  // Static folder
  app.use('/public', express.static(path.join(__dirname, '../public')));
}