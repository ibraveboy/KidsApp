import {
    StyleSheet
} from "react-native";

export const styles = StyleSheet.create({

    textWhite: {
        color: "white"
    },
    form: {
        paddingHorizontal: 10,
        paddingVertical: 30,
        paddingBottom: 50,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: "#F5CC05",
    },

    inputContainer: {
        paddingHorizontal: 0
    },
    containerStyle: {
        borderBottomWidth: 0,
        marginTop: 20
    },
    input: {
        backgroundColor: "white",
        borderRadius: 5,
        paddingLeft: 10,
        fontSize: 16,
        height: 45
    },
    buttonCenter: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40
    },
    buttonStyle: {
        backgroundColor: "#403E3F",
        width: 150,
        paddingVertical: 15,
        textAlign: "center",
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    }
});