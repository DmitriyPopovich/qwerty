const PostsModel = require('../models/posts')
const UserModel = require('../models/user')
const ApiError = require("../exceptions/api-error");
const PostDto = require("../dtos/post-dto");

class PostsService{
    async getPosts(){
        const posts = await PostsModel.find()
        if(!posts) throw ApiError.BadRequest()
        return posts
    }
    async createPost(id, title, text){
        const author = await UserModel.findOne({_id:id})
        if(!author) throw ApiError.BadRequest()
        const post = await PostsModel.create(
            {author:author.id, title: title, text:text}
        )
        if(!post) throw ApiError.BadRequest()
        return {post}
    }
    async getPost(id){
        const post = await PostsModel.findOne({id})
        return new PostDto(post)
    }
    async updatePost(id_user, id_post, title, text){
        const post = await PostsModel.findOne({_id:id_post, author:id_user})
        if(!post) throw ApiError.BadRequest()
        post.title = title
        post.text = text
        await post.save()
    }
    async deletePost(id_user, id_post){
        //TODO - удалять уже полученный пост без перезапроса !
        const post = await PostsModel.findOne({_id:id_post, author:id_user})
        if(!post) throw ApiError.BadRequest()
        await PostsModel.deleteOne({_id:id_post, author:id_user})
        return {'status': 'ok'}
    }
}

module.exports = new PostsService()