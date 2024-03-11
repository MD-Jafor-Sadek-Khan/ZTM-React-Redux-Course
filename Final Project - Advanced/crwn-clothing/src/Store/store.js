import { compose, createStore, applyMiddleware } from "redux"
// import logger from "redux-logger"
import { rootReducer } from "./root-reducer"

const loggerMiddleware = store => next => action => {
  if (!action.type) {
    return next(action)
  }

  console.log("MIDDLEWARE: action type: ", action.type)
  console.log("MIDDLEWARE: action payload: ", action.payload)
  console.log("MIDDLEWARE: Current State: ", store.getState())

  next(action)

  console.log("MIDDLEWARE: next State: ", store.getState())
}

// const middlewares = [logger]
const middlewares = [loggerMiddleware]

const composeEnhancers = compose(applyMiddleware(...middlewares))

export const store = createStore(rootReducer, undefined, composeEnhancers)
