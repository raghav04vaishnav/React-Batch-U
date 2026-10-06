import { configureStore } from "@reduxjs/toolkit";
import productSlice from '../slice/productSlice'
import cartSlice from '../slice/cartSlice'


const store = configureStore({
    reducer:{
        products: productSlice,
        cart: cartSlice,
    }
})

export default store