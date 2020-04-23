import {
    StyleSheet
} from "react-native";

export const styles = StyleSheet.create({

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

});