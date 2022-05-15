const ApiError = require('../exceptions/api-error')

//#use only after auth-services.js-middleware
//TODO must be checked!

module.exports = (roles) => {
    return (req, res, next) => {
        if(req.method === 'OPTIONS') next()
        try{
            const {roles: userRoles} = req.user
            if(!userRoles) return next(ApiError.UnauthorizedError())
            let hasRole = false
            userRoles.forEach((role)=>{
                if(roles.includes(role)) hasRole = true
            })
            if(!hasRole) return next(ApiError.AccessDenied())
            next()
        } catch (e){
            return next(ApiError.AccessDenied())
        }
    }
}