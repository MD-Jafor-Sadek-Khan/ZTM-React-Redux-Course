import { createContext, useEffect, useReducer } from "react"
import {
  createUserDocumentFromAuth,
  onUserAuthStateChanged,
} from "../utils/Firebase-Utils/firebase.utils"
import { createAction } from "../utils/Reducer-Utils/reducer.utils"

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
})

const USER_ACTION_TYPE = {
  Switch_Current_User: "Switch_Current_User",
}

const userReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case USER_ACTION_TYPE.Switch_Current_User:
      return {
        ...state,
        currentUser: payload,
      }
    default:
      throw new Error(`No Such Action Called "${type}" Found In userReducer`)
  }
}

const INITIAL_VALUE = {
  currentUser: null,
}

export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_VALUE)
  
  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPE.Switch_Current_User, user))
  }

  const value = { currentUser, setCurrentUser }

  useEffect(() => {
    const unSubscribe = onUserAuthStateChanged((user) => {
      if (user) {
        createUserDocumentFromAuth(user)
      }

      setCurrentUser(user)
    })
    return unSubscribe
  }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
