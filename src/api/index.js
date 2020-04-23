import {
    AsyncStorage
} from "react-native"

import {
    CommonActions
} from "@react-navigation/native"
export const registerUserAsyncStorage = (firstName, lastName, email, password, setErrors, setIsLoading, successFunc) => {
    let user = {
        firstName,
        lastName,
        email,
        password
    }
    AsyncStorage.getItem("kids_users").then(users => {
        if (users) {
            users = JSON.parse(users)
            console.log("Users :", users)
            if (users.find(function (_user) {
                    return (_user.email == user.email)
                })) {
                setErrors({
                    general: "Email already exists."
                })
                setIsLoading(false)
                return;
            }
            users.push(user)
            AsyncStorage.setItem("kids_users", JSON.stringify(users))
                .then(() => {
                    successFunc(true)
                    setIsLoading(false)
                })
                .catch(() => {
                    setErrors({
                        general: "Something went wrong."
                    })
                    setIsLoading(false)
                })
        } else {
            AsyncStorage.setItem("kids_users", JSON.stringify([user]))
                .then(() => {
                    console.log("success")
                    setIsLoading(false)
                })
                .catch(() => {
                    setErrors({
                        general: "Something went wrong."
                    })
                    setIsLoading(false)
                })
        }
    })
}
export const loginUserAsyncStorage = (email, password, setErrors, setIsLoading, setAllUserFields, navigation) => {
    let isUserRegistered = false
    let user = {
        email,
        password
    }
    AsyncStorage.getItem("kids_users").then(users => {
        if (users) {
            users = JSON.parse(users)
            for (let i = 0; i < users.length; i++) {
                if (users[i].email === user.email) {
                    if (users[i].password === user.password) {
                        isUserRegistered = true
                        setAllUserFields(users[i])
                        setIsLoading(false)
                        navigation.dispatch(
                            CommonActions.reset({
                                index: 0,
                                routes: [{
                                    name: "Explore"
                                }]
                            })
                        )
                        break;
                    } else {
                        isUserRegistered = true
                        setErrors({
                            general: "Your password is incorrect."
                        })
                        setIsLoading(false)
                        break;
                    }
                }
            }
            if (!isUserRegistered)
                setErrors({
                    general: "Your email is not registered."
                })
            setIsLoading(false)
        } else {
            setErrors({
                general: "Your email is not registered."
            })
            setIsLoading(false)
        }
    }).catch(err => {
        setErrors({
            general: "Something went wrong."
        })
        setIsLoading(false)
    })
}