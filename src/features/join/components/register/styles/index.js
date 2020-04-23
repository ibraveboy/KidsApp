import {
    StyleSheet
} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: "stretch",
    },
    imageFull: {
        height: "100%"
    },
    header: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "white",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        overflow: "hidden",
        elevation: 10,
        height: 320
    },
    roundView: {
        width: "75%",
        height: "95%",
        borderRadius: 100,
    },
    formWrapper: {
        flexDirection: "column",
        marginTop: 45,
        elevation: 10,
        borderRadius: 10,
        overflow: "hidden"
    },
    switchTab: {
        backgroundColor: "white",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        flexDirection: "row",
        overflow: "hidden",
    },
    tab: {
        width: "50%",
        paddingVertical: 20,
    },
    active: {
        backgroundColor: "#F5CC05",
        color: "white"
    },
    tabText: {
        fontSize: 20,
        textAlign: "center"
    },
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
    formHorizontal: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    formControl: {
        width: "49%"
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
        alignItems: "center"
    }
});