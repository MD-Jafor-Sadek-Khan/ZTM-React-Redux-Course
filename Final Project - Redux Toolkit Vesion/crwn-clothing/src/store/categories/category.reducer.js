import { createSlice } from "@reduxjs/toolkit"
import { CATEGORIES_ACTION_TYPES } from "./category.types"

export const CATEGORIES_INITIAL_STATE = {
  categories: [],
}

// export const categoriesReducer = (
//   state = CATEGORIES_INITIAL_STATE,
//   action = {}
// ) => {
//   const { type, payload } = action

//   switch (type) {
//     case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
//       return { ...state, categories: payload }
//     default:
//       return state
//   }
// }

export const categorySlice = createSlice({
  name: "category",
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload
    },
  },
})

export const categoriesReducer = categorySlice.reducer
export const {setCategories} = categorySlice.actions