import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../types/Item";

const INITIAL_STATE: Item[] = [
  { id: 2, name: "Comprar ovos", done: false },
  { id: 1, name: "Comprar frango", done: true },
];

export const todoSlice = createSlice({
  name: "todo",
  initialState: INITIAL_STATE,
  reducers: {
    addTodo(state, action) {
      const newTodo = {
        id: state.length + 1,
        name: action.payload.name,
        done: false,
      };
      state.push(newTodo);
    },
    addDone(state, action) {
      return state.map((st) =>
        st.id === action.payload ? { ...st, done: !st.done } : st
      );
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, addDone } = todoSlice.actions;
export const useTodos = (state: any) => {
  return state.todos;
};

