import React, { useState } from 'react'
import { View, TouchableOpacity, ActivityIndicator } from 'react-native'
import { styles } from './styles'
import { Input, Text } from 'react-native-elements'
import { loginButtonOnPressHandler } from './api'
import ErrorText from '../error'


const Login = (props) => {
    let { visible } = props
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: ""
    })
    const [isLoading, setIsLoading] = useState(false)
    return (
        <React.Fragment>
            <View style={{ ...styles.form, display: visible ? "flex" : "none" }} >
                <ErrorText
                    visible={errors.general ? true : false}
                    onClose={() => { setErrors({ ...errors, general: "" }) }}
                    text={errors.general}
                />
                <View>
                    <Input
                        inputContainerStyle={styles.containerStyle}
                        inputStyle={styles.input}
                        containerStyle={styles.inputContainer}
                        placeholder="Email"
                        value={props.email}
                        errorMessage={errors.email}
                        onChangeText={(text) => {
                            props.editUserField("email", text)
                            if (errors.email)
                                setErrors({ ...errors, email: "" })
                        }}
                    />
                </View>
                <View>
                    <Input
                        inputContainerStyle={styles.containerStyle}
                        inputStyle={styles.input}
                        containerStyle={styles.inputContainer}
                        placeholder="Password"
                        secureTextEntry={true}
                        value={props.password}
                        errorMessage={errors.password}
                        onChangeText={(text) => {
                            props.editUserField("password", text)
                            if (errors.password)
                                setErrors({ ...errors, password: "" })
                        }}
                    />
                </View>
                <View style={styles.buttonCenter}>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={() => {
                            setIsLoading(true)
                            loginButtonOnPressHandler(props.email, props.password, setErrors, setIsLoading, props.setAllUserFields, props.navigation)
                        }}
                    >
                        <Text style={{ ...styles.textWhite, textAlign: "center", fontSize: 16 }}>
                            Login
                        </Text>
                        <ActivityIndicator size={20} color="white" style={{ display: isLoading ? "flex" : "none" }} />
                    </TouchableOpacity>
                </View>
            </View>
        </React.Fragment>
    )
}

export default Login
