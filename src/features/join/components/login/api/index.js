import {
    loginUserAsyncStorage,
} from "../../../../../api";

export const loginButtonOnPressHandler = (email, password, setErrors, setIsLoading, setAllUserFields, navigation) => {
    if (email == "" || password == "") {
        let _errors = {}
        let allFields = {
            email,
            password,
        }
        for (let field in allFields) {
            if (allFields[field] == "") {
                _errors[field] = "This field must be filled."
                continue;
            }
        }
        setErrors(_errors)
        setIsLoading(false)
    } else {
        loginUserAsyncStorage(email, password, setErrors, setIsLoading, setAllUserFields, navigation)
    }
}