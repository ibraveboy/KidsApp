import {
    EDIT_USER_FIELD,
    SET_ALL_USER_FIELDS
} from "./constants"

export const editUserField = (fieldName, fieldValue) => {
    return {
        type: EDIT_USER_FIELD,
        payload: {
            fieldName,
            fieldValue
        }
    }
}

export const setAllUserFields = (user) => {
    return {
        type: SET_ALL_USER_FIELDS,
        payload: user
    }
}