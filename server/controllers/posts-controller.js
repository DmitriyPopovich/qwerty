const PostsService = require('../service/posts-service')

class postsController{
    async getPosts(req ,res, next){
        try{
            const posts = await PostsService.getPosts()
            return res.status(200).json(posts)
        } catch (err){
            next(err)
        }
    }
    async getPost(req ,res, next){
        try{
            const {id} = req.body
            const post = await PostsService.getPost(id)
            return res.status(200).json(post)
        } catch (err){
            next(err)
        }
    }
    async createPost(req ,res, next){
        try{
            const {title, text} = req.body
            const {id} = req.user
            const result = await PostsService.createPost(id, title, text)
            return res.status(200).json(result)
        } catch (err){
            next(err)
        }
    }
    async updatePost(req ,res, next){
        try{
            const {title, text} = req.body
            const {id_user} = req.user
            const {id_post} = req.get
            const result = await PostsService.updatePost(id_user, id_post, title, text)
            return res.status(200).json(result)
        } catch (err){
            next(err)
        }
    }


}
module.exports = new postsController()