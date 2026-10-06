import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const orderHistorySlice = createSlice({
  name: "orderHistory",
  initialState,

  reducers: {
    addOrder: (state, action) => {
      state.push(action.payload);
    },

    clearOrderHistory: () => {
      return [];
    },
  },
});

export const { addOrder, clearOrderHistory } = orderHistorySlice.actions;

export default orderHistorySlice.reducer;
