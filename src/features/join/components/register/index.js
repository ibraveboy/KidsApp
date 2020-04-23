import React from 'react'
import { View, TouchableOpacity, ActivityIndicator } from 'react-native'
import { styles } from './styles'
import { Text, Input, Image } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import lion from "../../../../assets/images/sunflower_bg.png"
import Login from '../login'
import { useState } from 'react'
import { registerButtonOnPressHandler } from './api'
import ErrorText from '../error'
import Popup from '../../../../components/popup'

const Register = (props) => {

    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        general: ""
    })
    const [isLoading, setIsLoading] = useState(false)
    const [isLoginPressed, setIsLoginPressed] = useState(false)
    const [showPopup, setShowPopup] = useState(false)
    return (
        <ScrollView>
            <View style={styles.header}>
                <View style={styles.roundView}>
                    <Image style={styles.imageFull} resizeMode="contain" resizeMethod="resize" source={lion} />
                </View>
            </View>
            <View style={styles.formWrapper}>
                <View style={styles.switchTab}>
                    <TouchableOpacity
                        style={{
                            ...styles.tab,
                            borderRightColor: "white",
                            borderRightWidth: 2,
                            backgroundColor: isLoginPressed ? "white" : "#F5CC05",
                        }}
                        onPress={() => { setIsLoginPressed(false) }}
                    >
                        <View>
                            <Text style={{ color: isLoginPressed ? "black" : "white", ...styles.tabText }}>
                                Register
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            ...styles.tab,
                            backgroundColor: isLoginPressed ? "#F5CC05" : "white",
                        }}
                        onPress={() => { setIsLoginPressed(true) }}
                    >
                        <View>
                            <Text style={{ color: isLoginPressed ? "white" : "black", ...styles.tabText }}>
                                Login
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ ...styles.form, display: isLoginPressed ? "none" : "flex" }} >
                    <ErrorText
                        visible={errors.general ? true : false}
                        onClose={() => { setErrors({ ...errors, general: "" }) }}
                        text={errors.general}
                    />
                    <View style={styles.formHorizontal}>
                        <View style={styles.formControl}>
                            <Input
                                inputContainerStyle={styles.containerStyle}
                                inputStyle={styles.input}
                                containerStyle={styles.inputContainer}
                                placeholder="First Name"
                                returnKeyType="next"
                                errorMessage={errors.firstName}
                                enablesReturnKeyAutomatically={true}
                                value={props.firstName}
                                onChangeText={(text) => {
                                    props.editUserField("firstName", text);
                                    if (errors.firstName)
                                        setErrors({ ...errors, firstName: "" })
                                }}
                            />
                        </View>
                        <View style={styles.formControl}>
                            <Input
                                inputContainerStyle={styles.containerStyle}
                                inputStyle={styles.input}
                                containerStyle={styles.inputContainer}
                                placeholder="Last Name"
                                returnKeyType="next"
                                errorMessage={errors.lastName}
                                enablesReturnKeyAutomatically={true}
                                value={props.lastName}
                                onChangeText={(text) => {
                                    props.editUserField("lastName", text)
                                    if (errors.lastName)
                                        setErrors({ ...errors, lastName: "" })
                                }}
                            />
                        </View>
                    </View>
                    <View>
                        <Input
                            inputContainerStyle={styles.containerStyle}
                            inputStyle={styles.input}
                            containerStyle={styles.inputContainer}
                            placeholder="Email"
                            returnKeyType="next"
                            enablesReturnKeyAutomatically={true}
                            errorMessage={errors.email}
                            value={props.email}
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
                            returnKeyType="done"
                            errorMessage={errors.password}
                            enablesReturnKeyAutomatically={true}
                            value={props.password}
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
                                registerButtonOnPressHandler(props.firstName, props.lastName, props.email, props.password, setErrors, setIsLoading, setShowPopup)
                            }}
                        >
                            <Text style={{ ...styles.textWhite, textAlign: "center", fontSize: 16 }}>
                                Register
                            </Text>
                            <ActivityIndicator size={20} color="white" style={{ display: isLoading ? "flex" : "none" }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Login visible={isLoginPressed} {...props} />
            </View>
            <Popup visible={showPopup} closeFunc={() => { setShowPopup(false) }} message="Hurray! You just joined us." type="success" />
        </ScrollView>
    )
}

export default Register
