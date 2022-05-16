import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {setNewPostAction} from "./actions";





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
            state.post = false;
        },
    },
    extraReducers: {
        // [loginUser.pending]: (state) => {
        //     state.status = "loading";
        //     state.error = false;
        // },
        // [loginUser.fulfilled]: (state) => {
        //     state.status = "resolved";
        //     state.error = false;
        // },
        // [loginUser.rejected]: setError,

    }
});
export const {
    setTitle,
    setText,
    unsetPost
} = postsSlice.actions;
export default postsSlice.reducer;
