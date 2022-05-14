const ApiError = require('../exceptions/api-error')
const tokenService = require('../service/token-service')

module.exports =  (req, res, next) => {
    if(req.method === 'OPTIONS') next()
    try{
        const authorizationHeader = req.headers.authorization
        if(!authorizationHeader) return next(ApiError.UnauthorizedError())
        const accessToken = authorizationHeader.split(' ')[1]
        if(!accessToken) return next(ApiError.UnauthorizedError())
        const userData = tokenService.validateAccessToken(accessToken)
        if(!userData.isActivated) return next(ApiError.UnactivatedError())
        if(!userData) return next(ApiError.UnauthorizedError())
        req.user = userData
        next()
    } catch (e){
        return next(ApiError.UnauthorizedError())
    }
}