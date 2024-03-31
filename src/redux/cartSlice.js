import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: []
  },
  reducers: {
    addItemToCart: (state, action) => {
      const timeId = new Date().getTime();
      if (state.cartItems.length > 0) {
        const good = state.cartItems.find((item) => item.goodID === action.payload.good.id)
        if (good !== undefined) {
          good.quantity = good.quantity + action.payload.quantity;
          good.totalPrice = action.payload.good.best ? good.quantity * action.payload.good.price*(100 - action.payload.good.discount)/100 : good.quantity * action.payload.good.price
        } else state.cartItems.push({
            id: timeId,
            goodID: action.payload.good.id,
            quantity: action.payload.quantity,
            price: action.payload.good.best ? action.payload.good.price*(100 - action.payload.good.discount)/100 : action.payload.good.price,
            totalPrice: action.payload.good.best ? action.payload.quantity * action.payload.good.price*(100 - action.payload.good.discount)/100 : action.payload.quantity * action.payload.good.price,
            name: action.payload.good.name,
            image: action.payload.good.image,
        })
      } else 
      state.cartItems.push({
        id: timeId,
        goodID: action.payload.good.id,
        quantity: action.payload.quantity,
        price:  action.payload.good.best ? action.payload.good.price*(100 - action.payload.good.discount)/100 : action.payload.good.price,
        totalPrice: action.payload.good.best ? action.payload.quantity *  action.payload.good.price*(100 - action.payload.good.discount)/100 : action.payload.quantity *  action.payload.good.price,
        name: action.payload.good.name,
        image: action.payload.good.image,
      })
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.goodItemId)
    },
    changeQuantityGood: (state, action) => {
        const good = state.cartItems.find((item) => item.goodID === action.payload.good.id)
        good.quantity = action.payload.quantity
        good.totalPrice = good.price * good.quantity
    }
  }
})

export const getTotalPrice = state => {
  return state.cart.cartItems.reduce((total, cartIterms) => {
    return cartIterms.totalPrice + total
  }, 0)
}

export const getCartItems = state => state.cart.cartItems
export const {addItemToCart, removeItemFromCart, changeQuantityGood} = cartSlice.actions
export default cartSlice.reducer