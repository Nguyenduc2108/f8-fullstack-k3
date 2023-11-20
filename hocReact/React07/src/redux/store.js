/*
slice --> Tổng hợp mọi thứ liên quan dến 1 feature  có
- state
- reducer
- action 

*/

import { counterSilce } from "../slice/counterSlice";
import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "../slice/todoSlice";

export const store = configureStore({
  reducer: {
    counter: counterSilce.reducer,
    todos: todoSlice.reducer,
  },
});
