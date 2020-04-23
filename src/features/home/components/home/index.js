import React from 'react'
import Animals from '../animals'
import Plants from '../plants'
import Birds from '../birds'
import { StatusBar, SafeAreaView, ScrollView, View } from 'react-native'
import { styles } from './styles'
import Header from '../../../../components/header'

const home = ({ homeData }) => {
    const { categoryName, setSelectedSpecieName } = homeData
    const selectedCategoryHomeComponent = (categoryName) => {
        if (categoryName === "plants")
            return (
                <Plants actions={{ setSelectedSpecieName }} gridData={homeData[categoryName]} />
            )
        else if (categoryName === "birds")
            return (
                <Birds actions={{ setSelectedSpecieName }} gridData={homeData[categoryName]} />
            )
        else
            return (
                <Animals actions={{ setSelectedSpecieName }} gridData={homeData[categoryName]} />
            )
    }
    return (
        <React.Fragment>
            <StatusBar barStyle="light-content" backgroundColor="rgb(250, 189, 37);" />
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <Header title={categoryName.toUpperCase()} />
                    <View style={styles.container}>
                        {selectedCategoryHomeComponent(categoryName)}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </React.Fragment>
    )
}

export default home
