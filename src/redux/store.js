import { configureStore } from "@reduxjs/toolkit";
import cart from './cartSlice';
import goods from './filterSlice';
import user from './userSlice';
import search from './searchSlice'

export const store = configureStore({
  reducer: {
    cart: cart,
    goods: goods,
    user: user,
    search: search,
  }
})
