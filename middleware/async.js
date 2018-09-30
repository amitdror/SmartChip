
module.exports = function asyncMiddleware(handler) {
    return async (req, res, next) =>{
        try {
            await handler(req, res);
        }
        catch (ex) {
            next(ex); //will could the last middleware ==> Express Error Middleware
        }
    };
}