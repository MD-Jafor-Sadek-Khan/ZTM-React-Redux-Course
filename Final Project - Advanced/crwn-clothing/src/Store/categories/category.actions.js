import { createAction } from "../../utils/Reducer-Utils/reducer.utils"
import { CATEGORIES_ACTIONS_TYPES } from "./category.types"

export const setCategoryMap = (categoriesMap) =>{
    return createAction(CATEGORIES_ACTIONS_TYPES.Set_Categories_Map, categoriesMap)
}