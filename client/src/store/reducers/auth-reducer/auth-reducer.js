import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {loginAction, registrationAction, logoutAction, checkAuthUserAction} from "./actions";

export const loginUser = createAsyncThunk(
    "auth/login",
    async function ({email, password}, { rejectWithValue, dispatch }) {
        await loginAction({email, password}, { rejectWithValue, dispatch})
    }
);
export const registrationUser = createAsyncThunk(
    "auth/registration",
    async function ({email, password}, { rejectWithValue, dispatch }) {
        await registrationAction({email, password}, { rejectWithValue, dispatch})
    }
);
export const logoutUser = createAsyncThunk(
    "auth/logout",
    async function (_, { rejectWithValue, dispatch }) {
        await logoutAction(_, { rejectWithValue, dispatch})
    }
);
export const checkAuthUser = createAsyncThunk(
    "auth/refresh",
    async function (_, { rejectWithValue, dispatch }) {
        await checkAuthUserAction(_, { rejectWithValue, dispatch})
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
