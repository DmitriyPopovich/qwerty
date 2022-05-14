const User = require('../models/user')
const {validationResult} = require('express-validator')
const AuthService = require('../service/auth-services')
const {TIME_REFRESH_COOKIE} = require('../config')
const ApiError = require('../exceptions/api-error')


//http://localhost:5000/auth/activate/c54fe031-455e-4876-ab19-cd53c2cd847c

class authController{
    async registration(req ,res, next){
        try{
            const errors = validationResult(req)
            if(!errors.isEmpty()) return next(ApiError.BadRequest("Validation register error", errors))
            const {email, password} = req.body
            const userData = await AuthService.registration(email, password)
            res.cookie('refreshToken', userData.refreshToken,
                {maxAge: TIME_REFRESH_COOKIE, httpOnly: true}
            ) //TODO add in obj settings => {secure: true} - only for http connection
            return res.status(201).json(userData)
        } catch (err){
            next(err)
        }
    }
    async login(req ,res, next){
        try{
            // console.log('login')
            const {email, password} = req.body
            const userData = await AuthService.login(email, password)
            res.cookie('refreshToken', userData.refreshToken,
                {maxAge: TIME_REFRESH_COOKIE, httpOnly: true}
            ) //TODO add in obj settings => {secure: true} - only for http connection
            // console.log(userData)
            return res.status(201).json(userData)
        } catch (err){
            next(err)
        }
    }
    async logout(req ,res, next){
        try{
            const {refreshToken} = req.cookies
            const token = await AuthService.logout(refreshToken)
            res.clearCookie('refreshToken')
            return res.status(203).json(token)
        } catch (err){
            console.log('No cookies in logout')
            next('No cookies in logout')
        }
    }
    async activate(req ,res, next) {
        try {
            const activationLink = req.params.link
            await AuthService.activate(activationLink)
            //TODO safari redirect работает, mozzila проблемы с редиректом проверять!
            return res.redirect(process.env.CLIENT_URL)
        }catch (err) {
            next(err)
        }
    }
    async refresh(req ,res, next){
        try{
            const {refreshToken} = req.cookies
            const userData = await AuthService.refresh(refreshToken)
            res.cookie('refreshToken', userData.refreshToken,
                {maxAge: TIME_REFRESH_COOKIE, httpOnly: true}
            ) //TODO add in obj settings => {secure: true} - only for http connection
            return res.status(201).json(userData)
        } catch (err){
            next(err)
        }
    }
}

module.exports = new authController()
