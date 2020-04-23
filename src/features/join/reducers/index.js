import {
    EDIT_USER_FIELD,
    SET_ALL_USER_FIELDS
} from "../constants"

const initialState = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
}

export const userReducer = (state = initialState, action) => {
    if (action.type === EDIT_USER_FIELD) {
        return {
            ...state,
            [action.payload.fieldName]: action.payload.fieldValue
        }
    } else if (action.type === SET_ALL_USER_FIELDS) {
        return {
            ...state,
            ...action.payload
        }
    }
    return state
}