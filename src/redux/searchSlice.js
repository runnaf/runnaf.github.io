import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    search: '',
  }
  
  export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
      filterSearch: (state, action) => {
        state.search = action.payload
      }
    },
  })
  
  export const getSearch = state => state.search.search
  export const { filterSearch } = searchSlice.actions
  export default searchSlice.reducer