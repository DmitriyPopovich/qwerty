import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {loginPayload, registrationPayload, logoutPayload, checkAuthUserPayload} from "./payloads";

export const loginUser = createAsyncThunk(
    "auth/login",
    async function ({email, password}, { rejectWithValue, dispatch }) {
        await loginPayload({email, password}, { rejectWithValue, dispatch})
    }
);
export const registrationUser = createAsyncThunk(
    "auth/registration",
    async function ({email, password}, { rejectWithValue, dispatch }) {
        await registrationPayload({email, password}, { rejectWithValue, dispatch})
    }
);
export const logoutUser = createAsyncThunk(
    "auth/logout",
    async function (_, { rejectWithValue, dispatch }) {
        await logoutPayload(_, { rejectWithValue, dispatch})
    }
);
export const checkAuthUser = createAsyncThunk(
    "auth/refresh",
    async function (_, { rejectWithValue, dispatch }) {
        await checkAuthUserPayload(_, { rejectWithValue, dispatch})
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
