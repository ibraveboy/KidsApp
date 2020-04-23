import {
    StyleSheet,
    Platform
} from 'react-native'
export const styles = StyleSheet.create({

    slopeView: Platform.OS === "android" ? ({
        borderBottomLeftRadius: 150,
        borderBottomRightRadius: 150,
        elevation: 5,
        textAlign: 'center',
        paddingVertical: 50,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgb(250, 189, 37);",
        color: "white"

    }) : ({
        borderBottomLeftRadius: 150,
        borderBottomRightRadius: 150,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: 5,
        shadowRadius: 5,
        textAlign: 'center',
        paddingVertical: 50,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgb(250, 189, 37);",
        color: "white"
    }),
    textWhite: {
        color: "white"
    },
});