import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 0,
};

export const counterSilce = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // --> name/function
    increment: (state, action) => {
      state.count = state.count + action.payload;
    },
    decrement: (state, action) => {
      state.count = state.count - action.payload;
    },
  },
});
