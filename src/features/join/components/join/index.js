import React from 'react'
import { SafeAreaView, StatusBar, KeyboardAvoidingView } from 'react-native'
import { styles } from './styles';
import Register from '../register';

const Join = (props) => {
    return (
        <React.Fragment>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <SafeAreaView
                style={{ flex: 1 }}
                contentInsetAdjustmentBehavior="automatic"
            >
                <KeyboardAvoidingView enabled style={styles.container}>
                    <Register {...props} />
                </KeyboardAvoidingView>
            </SafeAreaView>
        </React.Fragment>
    )
}

export default Join
