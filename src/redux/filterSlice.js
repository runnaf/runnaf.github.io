import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    selectedCategory: "all",
  }
  
  export const goodsSlice = createSlice({
    name: 'goods',
    initialState,
    reducers: {
      filterCategory: (state, action) => {
        state.selectedCategory = action.payload
      }
    },
  })
  
  export const getSelectedCategory = state => state.goods.selectedCategory
  export const { filterCategory } = goodsSlice.actions
  export default goodsSlice.reducer