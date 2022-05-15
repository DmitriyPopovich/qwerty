const PostsService = require('../service/posts-service')

class userController{
    async getPosts(req ,res, next){
        try{
            const users = await PostsService.getPosts()
            return res.status(200).json(users)
        } catch (err){
            next(err)
        }
    }
}
module.exports = new userController()