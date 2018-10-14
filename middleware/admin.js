
module.exports = function (req, res, next) {
    //401 Unauthrozed - access protcted resources with invalid jwt 
    //403 Forbidden - access protcted resources without right auth
    if(!req.user.isAdmin) return res.status(403).send('Access denied.');
    next();
}