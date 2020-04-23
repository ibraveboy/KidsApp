import {
    StyleSheet
} from 'react-native'
export const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: "white",
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingBottom: 10,
        justifyContent: "space-between",
    },
    heading: {
        textAlign: "center",
        marginVertical: 50
    },
    loadingCenter: {
        justifyContent: "center",
        alignItems: "center"
    },
    webViewStyle: {
        height: 300,
        width: "100%"
    }
});