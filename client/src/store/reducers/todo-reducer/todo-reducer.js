import { createSlice } from "@reduxjs/toolkit";
import {
  onItemAdd,
  onItemRemove,
  onToggleMain,
  onSetTerm,
  onSetFilter
} from "./actions";

const todoSlice = createSlice({
  name: "todo",
  initialState: null,
  reducers: {
    addTodo: (state, action) => {
      onItemAdd(state, action);
    },
    removeTodo: (state, action) => {
      onItemRemove(state, action);
    },
    toggleMain: (state, action) => {
      onToggleMain(state, action);
    },
    setTerm: (state, action) => {
      onSetTerm(state, action);
    },
    setFilter: (state, action) => {
      onSetFilter(state, action);
    }
  }
});
export const { addTodo, removeTodo, toggleMain, setTerm, setFilter } =
  todoSlice.actions;
export default todoSlice.reducer;
