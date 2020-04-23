import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { Text, Image } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const griditem = (props) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={{ ...styles.gridItem, backgroundColor: props.bg }}
            onPress={() => {
                props.actions.setSelectedSpecieName(props.name)
                navigation.navigate("Lifecycle")
            }}
        >
            <View style={styles.imageWrapper}>
                <Image
                    resizeMethod="resize"
                    resizeMode="contain"
                    style={styles.imageFull}
                    source={props.source}
                />
            </View>
            <View>
                <Text h4 style={styles.textWhite}>
                    {props.name}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default griditem
