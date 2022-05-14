import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../../http/auth-services";


export const loginUser = createAsyncThunk(
    "auth/login",
    async function ({email, password}, { rejectWithValue, dispatch }) {
        try {
            const final_data = await AuthService.getLogin({email, password})
            localStorage.setItem('token', final_data.accessToken)
            dispatch(setUser(final_data.user))
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);
export const registrationUser = createAsyncThunk(
    "auth/registration",
    async function ({email, password}, { rejectWithValue, dispatch }) {
        try {
            const final_data = await AuthService.getRegistration({email, password})
            localStorage.setItem('token', final_data.accessToken)
            dispatch(setUser(final_data.user))
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);
export const logoutUser = createAsyncThunk(
    "auth/logout",
    async function (_, { rejectWithValue, dispatch }) {
        try {
            const final_data = await AuthService.getLogout()
            console.log(final_data)
            dispatch(setUser(false))
            localStorage.removeItem('token')
        } catch (err) {
            console.log(err)
            return rejectWithValue(err.message);
        }
    }
);
export const checkAuthUser = createAsyncThunk(
    "auth/refresh",
    async function (_, { rejectWithValue, dispatch }) {
        try {
            const final_data = await AuthService.getRefresh()
            console.log(final_data)
            localStorage.setItem('token', final_data.accessToken)
            dispatch(setUser(final_data.user))
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

const setError = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
};

const authSlice = createSlice({
  name: "auth",
  initialState: null,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.status = "loading";
      state.error = false;
    },
    [loginUser.fulfilled]: (state) => {
      state.status = "resolved";
      state.error = false;
    },
    [loginUser.rejected]: setError,

  }
});
export const {
  setUser,
} = authSlice.actions;
export default authSlice.reducer;
