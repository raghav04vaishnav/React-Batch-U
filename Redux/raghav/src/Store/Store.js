import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../counter/counterSlice.js";
import userSlice from "../counter/userSlice.js";
import ProductSlice from "../counter/ProductSlice.js";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    user: userSlice,
    product: ProductSlice,
  },
});
