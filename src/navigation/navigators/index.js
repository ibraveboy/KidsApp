import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import explore from '../../features/explore/containers/index'
import Home from "../../features/home/containers"
import Join from '../../features/join/containers/'
import SpecieLifeStyle from '../../features/lifecycle/containers'

const Stack = createStackNavigator()

function appNavigator(props) {
    return (
        <Stack.Navigator
            initialRouteName="Join"
        >
            <Stack.Screen
                name="Explore"
                component={explore}
                options={{
                    header: () => null
                }}
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    header: () => null
                }}
            />
            <Stack.Screen
                name="Join"
                component={Join}
                options={{
                    header: () => null
                }}
            />
            < Stack.Screen
                name="Lifecycle"
                component={
                    SpecieLifeStyle
                }
                options={
                    {
                        header: () => null
                    }
                }
            />
        </Stack.Navigator>
    )
}

export default appNavigator