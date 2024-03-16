import { all, call, put, takeLatest } from "redux-saga/effects"
import { USER_ACTION_TYPE } from "./user.types"
import {
  createUserDocumentFromAuth,
  getCurrentUser,
} from "../../utils/Firebase-Utils/firebase.utils"
import { signInFalied, signInSuccess } from "./user.actions"

export function* getSnapShotFromUserAuth(userAuth, additionalField) {
  try {
    const userDocSnapShot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalField
    )

    yield put(
      signInSuccess({ id: userDocSnapShot.id, ...userDocSnapShot.data() })
    )
  } catch (error) {
    yield put(signInFalied(error))
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser)
    if (!userAuth) return
    yield call(getSnapShotFromUserAuth, userAuth)
  } catch (error) {}
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPE.Check_User_Session, isUserAuthenticated)
}

export function* userSagas() {
  yield all([call(onCheckUserSession)])
}
