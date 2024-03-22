import { createSelector } from "reselect"

const selectUserSlice = (state) => state.user

export const selectUserIsLoading = createSelector(
  [selectUserSlice],
  (userSlice) => {
    return userSlice.isLoading
  }
)

export const userSelector = createSelector([selectUserSlice], (userSlice) => {
  return userSlice.currentUser
})
