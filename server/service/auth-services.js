const UserModel = require('../models/user')
const RoleModel = require('../models/role')
const bcrypt = require('bcryptjs');
const uuid = require('uuid')
const mailService = require('./mail-service')
const tokenService = require('./token-service')
const UserDto = require('../dtos/user-dto')
const ApiError = require('../exceptions/api-error')


class AuthService{
    async __returnUserTokenData(user){
        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        return{...tokens, user: userDto}
    }
    async registration(email, password){
        const candidate = await UserModel.findOne({email})
        if(candidate) {
            const err = `User ${email} already exist`
            throw ApiError.BadRequest(err)
        }
        const hashPassword = await bcrypt.hash(password, 3);
        const activation_id = uuid.v4()
        const activationLink = `${process.env.API_URL}/auth/activate/${activation_id}`
        console.log(activationLink)
        //TODO подключить отправку позже
        // await mailService.sendActivationMail(email, activationLink)
        const userRole = await RoleModel.findOne({value:"USER"})
        const user = await UserModel.create(
            {email, password: hashPassword, activationLink:activation_id, roles:[userRole.value]}
        )
        return await this.__returnUserTokenData(user)
    }
    async login(email, password){
        const candidate = await UserModel.findOne({email})
        if(!candidate) throw ApiError.BadRequest('User not found__', email)
        const isPassEquals = await bcrypt.compare(password, candidate.password)
        if(!isPassEquals) throw ApiError.BadRequest('Invalid password')
        return await this.__returnUserTokenData(candidate)
    }
    async logout(refreshToken){
        return await tokenService.removeToken(refreshToken)
    }
    async activate(activationLink){
        const candidate = await UserModel.findOne({activationLink})
        if(!candidate) throw ApiError.BadRequest('Invalid activation link')
        candidate.isActivated = true
        await candidate.save()
        //TODO  отправка письма об успешной активации
    }
    async refresh(refreshToken){
        if(!refreshToken) throw ApiError.UnauthorizedError()
        const userData = tokenService.validateRefreshToken(refreshToken)
        const tokenFromDB = await tokenService.findToken(refreshToken)
        if(!userData || !tokenFromDB) throw ApiError.UnauthorizedError()
        const candidate = await UserModel.findById(userData.id)
        return await this.__returnUserTokenData(candidate)
    }

}
module.exports = new AuthService()