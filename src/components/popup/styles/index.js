import {
    StyleSheet
} from "react-native";

export const styles = StyleSheet.create({
    containerStyle: {
        paddingHorizontal: 50,
        paddingVertical: 70,
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 5,
    },
    message: {
        textAlign: "center",
        fontSize: 18,
        color: "grey"
    },
    closeBtn: {
        position: "absolute",
        right: 5,
        top: 5,
    }
})