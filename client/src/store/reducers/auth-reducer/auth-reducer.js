import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../../services/axios/auth_service";


export const loginUser = createAsyncThunk(
    "auth/login",
    async function ({email, password}, { rejectWithValue, dispatch }) {
        try {
            const {data} = await AuthService.getLogin(email, password)
            localStorage.setItem('token', data.accessToken)
            dispatch(setUser(data.user))
            dispatch(setAuth(true))
        } catch (err) {
            console.log(err)
            return rejectWithValue(err.data.message);//TODO check !!
        }
    }
);
export const registrationUser = createAsyncThunk(
    "auth/registration",
    async function ({email, password}, { rejectWithValue, dispatch }) {
        try {
            const {data} = await AuthService.getRegistration(email, password)
            localStorage.setItem('token', data.accessToken)
            dispatch(setUser(data.user))
            dispatch(setAuth(true))
        } catch (err) {
            console.log(err)
            return rejectWithValue(err.data.message);
        }
    }
);
export const logoutUser = createAsyncThunk(
    "auth/logout",
    async function (_, { rejectWithValue, dispatch }) {
        try {
            const {data} = await AuthService.getLogout()
            console.log(data)
            dispatch(setUser(false))
            dispatch(setAuth(false))
            localStorage.removeItem('token')
        } catch (err) {
            console.log(err)
            return rejectWithValue(err.data.message);
        }
    }
);
export const checkAuthUser = createAsyncThunk(
    "auth/refresh",
    async function (_, { rejectWithValue, dispatch }) {
        try {
            const {data} = await AuthService.getRefresh()
            localStorage.setItem('token', data.accessToken)
            dispatch(setUser(data.user))
            dispatch(setAuth(true))
        } catch (err) {
            console.log(err)
            return rejectWithValue(err.data.message);
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
    setAuth: (state, action) => {
        state.isAuth = action.payload;
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
  setAuth
} = authSlice.actions;
export default authSlice.reducer;
