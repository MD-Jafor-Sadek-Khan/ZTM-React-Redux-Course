import { createSelector } from "reselect"

export const userSelector = (state) => state.user.currentUser

const selectUserSlice = (state)=> state.user

export const selectUserIsLoading =  createSelector(
    [selectUserSlice],
    (userSlice) => userSlice.isLoading
)

