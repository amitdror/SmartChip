
const helmet = require('helmet');
const compression = require('compression');

module.exports = function(app){
    app.use(helmet());  //Helmet helps you secure your Express apps by setting various HTTP headers.
     app.use(compression()); //Node.js compression middleware - The middleware will attempt to compress response bodies for all request that traverse through the middleware
}