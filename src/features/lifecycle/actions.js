import {
    SET_SELECTED_SPECIE_NAME
} from "./constants"

export const setSelectedSpecieName = (specieName) => {
    return {
        type: SET_SELECTED_SPECIE_NAME,
        payload: specieName
    }
}