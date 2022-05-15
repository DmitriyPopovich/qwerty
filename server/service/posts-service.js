const PostsModel = require('../models/posts')

class PostsService{
    async getPosts(){
        const posts = await PostsModel.find()
        return posts
    }
}

module.exports = new PostsService()