import { CATEGORIES_ACTIONS_TYPES } from "./category.types"

const CATEGORIES_INITIAL_VALUE = {
  categories: [],
}

export const categoryReducer = (
  state = CATEGORIES_INITIAL_VALUE,
  action = {}
) => {
  const { type, payload } = action

  switch (type) {
    case CATEGORIES_ACTIONS_TYPES.Set_Categories:
      return {
        ...state,
        categories: payload,
      }

    default:
      return state
  }
}
