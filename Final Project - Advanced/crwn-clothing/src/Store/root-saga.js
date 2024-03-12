import { call, all } from "redux-saga/effects"
import { categorySaga } from "./categories/category.saga"

export function* rootSaga() {
    yield all([call(categorySaga)])
}
