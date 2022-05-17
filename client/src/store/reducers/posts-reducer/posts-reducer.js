import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {setNewPostAction} from "./actions";
import initialState from '../../initial-state'
import {getPostsAction} from "./actions/actions";


export const getPosts = createAsyncThunk(
    "posts",
    async function (_, { rejectWithValue, dispatch }) {
        await getPostsAction(_, { rejectWithValue, dispatch})
    }
);
export const setNewPost = createAsyncThunk(
    "posts/new",
    async function ({title, text}, { rejectWithValue, dispatch }) {
        await setNewPostAction({title, text}, { rejectWithValue, dispatch})
    }
);

const setError = (state, action) => {
    state.status = "rejected";
    state.error = action.payload;
};

const postsSlice = createSlice({
    name: "posts",
    initialState: null,
    reducers: {
        setTitle: (state, action) => {
            state.post.title = action.payload;
        },
        setText: (state, action) => {
            state.post.text = action.payload;
        },
        unsetPost: (state) => {
            state.post = initialState.posts;
        },
        setPosts: (state, action) => {
            state.data = action.payload;
        },
    },
    extraReducers: {
        [getPosts.pending]: (state) => {
            state.status = "loading";
            state.error = false;
        },
        [getPosts.fulfilled]: (state) => {
            state.status = "resolved";
            state.error = false;
        },
        [getPosts.rejected]: setError,

    }
});
export const {
    setTitle,
    setText,
    unsetPost,
    setPosts
} = postsSlice.actions;
export default postsSlice.reducer;
