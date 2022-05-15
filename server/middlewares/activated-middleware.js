const ApiError = require('../exceptions/api-error')
const {errorMsg} = require('../helpers/chalk_helper')


//TODO must be checked!
module.exports = function (err, req, res, next){
    if(req.method === 'OPTIONS') next()
    try{
        const {isActivated} = req.user
        if(!isActivated) return next(ApiError.AccessDenied())
        next()
    }catch (e){
        return next(ApiError.AccessDenied())
    }
}