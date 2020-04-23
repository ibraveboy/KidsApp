import React from 'react'
import { Overlay, Text, Icon } from 'react-native-elements'
import { styles } from './styles'
import { View, TouchableOpacity } from 'react-native'

const Popup = ({ type, message, visible, closeFunc }) => {
    return (
        <Overlay animationType="slide" overlayStyle={styles.containerStyle} isVisible={visible} onBackdropPress={closeFunc} height="auto">
            <React.Fragment>
                <TouchableOpacity style={styles.closeBtn} onPress={closeFunc}>
                    <Icon name="cancel" type="material" color="red" size={40} style={{ elevation: 10 }} />
                </TouchableOpacity>
                <View style={{ marginBottom: 20 }}>
                    <Icon type="material" name={type == "success" ? "check-box" : "error"} color={type == "success" ? "green" : "red"} size={100} />
                </View>
                <View>
                    <Text style={styles.message}>
                        {message}
                    </Text>
                </View>
            </React.Fragment>
        </Overlay>
    )
}

export default Popup
