import {
    StyleSheet
} from 'react-native'

export const styles = StyleSheet.create({

    gridItem: {
        flexDirection: "column",
        margin: 10,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 20,
        elevation: 5,
    },
    textWhite: {
        color: "white"
    },
    imageWrapper: {
        height: 200,
        width: 200,
        backgroundColor: "white",
        borderRadius: 100,
        marginBottom: 10
    },
    imageFull: {
        height: "100%"
    }
});