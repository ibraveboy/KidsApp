import React from 'react'
import { View } from 'react-native'
import { Image } from 'react-native-elements'
import { styles } from './styles'

const HeaderSquare = (props) => {
    return (
        <View style={styles.header}>
            <View style={styles.roundView}>
                <Image style={styles.imageFull} resizeMode="contain" resizeMethod="resize" source={props.source} />
            </View>
        </View>
    )
}

export default HeaderSquare
