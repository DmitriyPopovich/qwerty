const jwt = require('jsonwebtoken')
const TokenModel = require('../models/token')
const TIME_ACCESS = process.env.TIME_LIVE_ACCESS_TOKEN
const TIME_REFRESH = process.env.TIME_LIVE_REFRESH_TOKEN

//TODO по одному пользователю 1 токен, при заходе с другого устройства токен перетирается и доступ пропадает!!
//TODO дорабатывать для нескольких устройств!!! + Удаление просроченных

class TokenServiceService{
    validateAccessToken(token) {
        try {
            return jwt.verify(token, process.env.JWT_ACCESS_SECRET)
        } catch (e) {
            return null
        }
    }
    validateRefreshToken(token){
        try{
            return jwt.verify(token, process.env.JWT_REFRESH_SECRET)
        } catch (e){
            return null
        }

    }
    generateTokens(payload){
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: TIME_ACCESS})
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: TIME_REFRESH})
        return {
            accessToken,
            refreshToken
        }
    }
    async saveToken(userId, refreshToken){
        const tokenData = await TokenModel.findOne({user:userId})

        if(tokenData) {
            tokenData.refreshToken = refreshToken
            return await tokenData.save()
        }
        return await TokenModel.create({user: userId, refreshToken})
    }
    async removeToken(refreshToken){
        await TokenModel.deleteOne({refreshToken})
        return {'status': 'ok'}
    }
    async findToken(refreshToken){
        const tokenData = await TokenModel.findOne({refreshToken})
        return tokenData
    }
}
module.exports = new TokenServiceService()