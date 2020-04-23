import React, { useState } from 'react'
import { View, ScrollView, StatusBar, SafeAreaView, ActivityIndicator } from 'react-native'
import { styles } from './styles'
import HeaderSquare from '../../../../components/headerSquare'
import { Text } from 'react-native-elements'
import 'react-native-get-random-values';
import WebView from 'react-native-webview'

const SpecieLifeStyle = (props) => {
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)
    return (
        <React.Fragment>
            <StatusBar barStyle="light-content" backgroundColor="rgb(250, 189, 37);" />
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}
                    contentContainerStyle={{ flexGrow: 1 }}
                >
                    <View style={styles.container}>
                        <HeaderSquare source={props.dataForSelectedSpecie[props.selectedSpecieName].image} />
                        <View>
                            <Text h3 style={styles.heading}>
                                {`Lifecycle of ${props.selectedSpecieName}`}
                            </Text>
                        </View>
                        <View style={styles.loadingCenter}>
                            <ActivityIndicator size={50} style={{ display: isLoading ? "flex" : "none" }} />
                        </View>
                        <View style={{ ...styles.loadingCenter, display: hasError ? "flex" : "none" }}>
                            <Text h4 style={styles.heading}>
                                Oops! something went wrong :'(
                            </Text>
                        </View>
                        <WebView
                            onError={
                                () => {
                                    setIsLoading(false);
                                    setHasError(true)
                                }
                            }
                            onLoadStart={() => {
                                setTimeout(() => {
                                    setIsLoading(false)
                                }, 2000)
                            }}

                            onLoadEnd={() => {
                                setIsLoading(false)
                            }}
                            allowsFullscreenVideo={true}
                            style={styles.webViewStyle}
                            originWhitelist={['*']}
                            source={{ uri: props.dataForSelectedSpecie[props.selectedSpecieName].url }}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </React.Fragment>
    )
}

export default SpecieLifeStyle
