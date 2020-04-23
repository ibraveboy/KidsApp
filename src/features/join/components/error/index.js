import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { styles } from './styles'

const ErrorText = (props) => {
    const { visible, onClose, text } = props
    return (
        <View style={{ display: visible ? "flex" : "none", ...styles.errorTextWrapper }} >
            <Icon name="info" type="material" color="white" size={20} />
            <View style={styles.errorText}>
                <Text style={{ color: "white", fontSize: 16 }}>
                    {text}
                </Text>
            </View>
            <TouchableOpacity
                style={styles.closeBtn}
                onPress={onClose}
            >
                <Icon name="close" type="material" color="white" size={20} />
            </TouchableOpacity>
        </View>
    )
}

export default ErrorText
