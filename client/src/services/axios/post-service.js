import $api from "../../http";

export default class PostService {

    static async fetchPosts(){
        return $api.get('/user/all')
    }
    static async createPost(){
        return $api.get('/posts/new')
    }




}