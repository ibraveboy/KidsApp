import {
    StyleSheet
} from "react-native";

export const styles = StyleSheet.create({
    errorTextWrapper: {
        flexDirection: "row",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        alignItems: "center",
        backgroundColor: "red",
        elevation: 1
    },
    errorText: {
        marginLeft: 10
    },
    closeBtn: {
        position: "absolute",
        top: 0,
        bottom: 0,
        padding: 5,
        right: 0,
        justifyContent: "center",
        alignItems: "center"
    }
})