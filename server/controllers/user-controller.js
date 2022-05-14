const UserService = require('../service/user-service')

class userController{
    async getUsers(req ,res, next){
        try{
            const users = await UserService.getAllUsers()
            return res.status(200).json(users)
        } catch (err){
            next(err)
        }
    }
}
module.exports = new userController()