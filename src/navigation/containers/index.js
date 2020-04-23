import React, { Component } from 'react'
import AppNavigator from '../navigators/index'
import { NavigationContainer } from '@react-navigation/native'
import { connect } from 'react-redux'

class MainNavigationContainer extends Component {
    render() {
        return (
            <NavigationContainer>
                <AppNavigator props={this.props}/>
            </NavigationContainer>
        )
    }
}

const mapStateToProps = (state)=>{
    return state
}

export default connect(mapStateToProps,null)(MainNavigationContainer)