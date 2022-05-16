import $api from "../../http";

export default class PostService {

    static async fetchPosts(){
        return $api.get('/posts')
    }
    static async createPost(title, text){
        return $api.post('/posts/new', {title, text})
    }


}