
const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
    // Verify token
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).send('Access denied. No token provided.');
    // Verify valid token
    try {
        const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
        req.user = decoded; //in router handelrs we can access --> req.user._id 
        next();
    } catch (ex) {
        res.status(400).send('Invalid token.');
    }

}
