import { SET_CATEGORY_NAME } from "./constants"

export const setCategoryName = (name)=>{
    return {
        type:SET_CATEGORY_NAME,
        payload:name
    }
}