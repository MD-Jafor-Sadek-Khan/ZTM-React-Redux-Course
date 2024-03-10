import { USER_ACTION_TYPE } from "./user.types"

const INITIAL_VALUE = {
  currentUser: null,
}

export const userReducer = (state = INITIAL_VALUE, action) => {
  const { type, payload } = action

  switch (type) {
    case USER_ACTION_TYPE.Switch_Current_User:
      return {
        ...state,
        currentUser: payload,
      }
    default:
      return state
  }
}
