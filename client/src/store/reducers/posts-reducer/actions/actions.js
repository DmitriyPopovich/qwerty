import {setPosts, unsetPost} from "../posts-reducer";
import PostService from "../../../../services/axios/post-service";


export const setNewPostAction = async ({title, text}, { rejectWithValue, dispatch }) => {
    try {
        await PostService.createPost(title, text)
        dispatch(unsetPost())
    } catch (err) {
        console.log(err)
        return rejectWithValue(err.data.message);
    }
}
export const getPostsAction = async (_, { rejectWithValue, dispatch }) => {
    try {
        const {data} = await PostService.fetchPosts()
        dispatch(setPosts(data))
    } catch (err) {
        console.log(err)
        return rejectWithValue(err.data.message);
    }
}

