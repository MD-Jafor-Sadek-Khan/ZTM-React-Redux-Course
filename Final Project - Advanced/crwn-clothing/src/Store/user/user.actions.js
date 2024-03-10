import { createAction } from "../../utils/Reducer-Utils/reducer.utils"
import { USER_ACTION_TYPE } from "./user.types"

export const setCurrentUser = (user) => {
   return createAction(USER_ACTION_TYPE.Switch_Current_User, user)
  }