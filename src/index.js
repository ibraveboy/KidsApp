import React, { Component } from 'react'
import { Provider } from 'react-redux'
import myStore from './myStore'
import MainNavigationContainer from './navigation/containers/index'



export default class Main extends Component {
    render() {
        return (
            <Provider store={myStore}>
                <MainNavigationContainer />
            </Provider>
        )
    }
}
