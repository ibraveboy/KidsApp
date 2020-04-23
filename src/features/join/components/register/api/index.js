import {
    registerUserAsyncStorage
} from "../../../../../api";

export const registerButtonOnPressHandler = (firstName, lastName, email, password, setErrors, setIsLoading, successFunc) => {
    if (firstName == "" || lastName == "" || email == "" || password == "" || password.length < 8) {
        let _errors = {}
        let allFields = {
            firstName,
            lastName,
            email,
            password,
        }
        for (let field in allFields) {
            if (allFields[field] == "") {
                _errors[field] = "This field must be filled."
                continue;
            }
            if (field == "password" && allFields[field].length < 8)
                _errors[field] = "Password must be at least 8 characters long."
        }
        setErrors(_errors)
        setIsLoading(false)
    } else {
        registerUserAsyncStorage(firstName, lastName, email, password, setErrors, setIsLoading, successFunc)
    }
}