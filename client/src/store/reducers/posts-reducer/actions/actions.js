import {unsetPost} from "../posts-reducer";
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

