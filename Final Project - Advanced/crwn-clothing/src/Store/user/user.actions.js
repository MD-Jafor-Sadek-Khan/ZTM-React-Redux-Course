import { createAction } from "../../utils/Reducer-Utils/reducer.utils"
import { USER_ACTION_TYPE } from "./user.types"

export const setCurrentUser = (user) => {
  return createAction(USER_ACTION_TYPE.Switch_Current_User, user)
}

export const checkUserSession = () => {
  return createAction(USER_ACTION_TYPE.Check_User_Session)
}

export const googleSignInStart = () => {
  return createAction(USER_ACTION_TYPE.Google_Sign_In_Start)
}
export const emailSignInStart = (email, password) => {
  return createAction(USER_ACTION_TYPE.Email_Sign_In_Start, {email, password})
}
export const signInSuccess = (user) => {
  return createAction(USER_ACTION_TYPE.Sign_In_Success, user)
}
export const signInFalied = (error) => {
  return createAction(USER_ACTION_TYPE.Sign_In_Falied, error)
}
