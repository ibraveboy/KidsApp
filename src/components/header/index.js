import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-elements'
import { styles } from './styles'

const Header = (props) => {
    return (
        <View style={styles.slopeView}>
            <Text h3 style={styles.textWhite}>
                {props.title}
            </Text>
        </View>
    )
}

export default Header
