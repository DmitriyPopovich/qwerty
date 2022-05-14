import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  onAddInCart,
  onDecreaseInCart,
  onIncreaseInCart,
  onRemoveFromCart,
  onUserRemove
} from "./actions";
import { _transformPersons } from "./transform-data-helpers";

export const fetchUsers = createAsyncThunk(
  "fakeapi/fetchUsers",
  async function (_, { rejectWithValue, dispatch }) {
    try {
      const resp = await fetch(
        "https://jsonplaceholder.typicode.com/users?_limit=2"
      );
      if (!resp.ok) throw new Error("Error loading...");
      const data = await resp.json();
      dispatch(setUsers(_transformPersons(data)));
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const deleteUser = createAsyncThunk(
  "todos/deleteTodo",
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const resp = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" }
        }
      ); //body: JSON.stringify(data)
      if (!resp.ok) throw new Error("Can't delete user");
      dispatch(removeUser(id));
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const setError = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
};

const fakeApiSlice = createSlice({
  name: "fakeapi",
  initialState: null,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    removeUser: (state, action) => {
      onUserRemove(state, action);
    },
    addInCart: (state, action) => {
      onAddInCart(state, action);
    },
    increaseInCart: (state, action) => {
      onIncreaseInCart(state, action);
    },
    decreaseInCart: (state, action) => {
      onDecreaseInCart(state, action);
    },
    removeFromCart: (state, action) => {
      onRemoveFromCart(state, action);
    }
  },
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.status = "loading";
      state.error = false;
    },
    [fetchUsers.fulfilled]: (state) => {
      state.status = "resolved";
      state.error = false;
    },
    [fetchUsers.rejected]: setError,
    [deleteUser.rejected]: setError
  }
});
export const {
  setUsers,
  removeUser,
  addInCart,
  increaseInCart,
  decreaseInCart,
  removeFromCart
} = fakeApiSlice.actions;
export default fakeApiSlice.reducer;
