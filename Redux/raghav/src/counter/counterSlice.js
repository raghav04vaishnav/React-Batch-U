import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { data: 0 },
  reducers: {
    increment: (state) => {
      state.data += 1;
    },
    decrement: (state) => {
      state.data -= 1;
    },
    multiplication: (state) => {
      state.data *= 2;
    },
    divide: (state) => {
      state.data /= 2;
    },
    reset: (state) => {
      state.data = 0;
    },
  },
});

export const { increment, decrement, multiplication, divide, reset } = counterSlice.actions;
export default counterSlice.reducer;