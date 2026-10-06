import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../slice/productSlice.js";
import loginSlice from "../slice/loginSlice.js";
import forgotPasswordSlice from "../slice/forgotPasswordSlice.js";
import cartSlice from "../slice/cartSlice.js";
import wishlistSlice from "../slice/wishlistSlice.js";
import orderHistorySlice from "../slice/orderHistorySlice.js";

const store = configureStore({
  reducer: {
    products: productSlice,
    login: loginSlice,
    forgotPassword: forgotPasswordSlice,
    cart: cartSlice,
    wishlist: wishlistSlice,
    orderHistory: orderHistorySlice,
  },
});

export default store;