import React, { Component } from 'react'
import { connect } from 'react-redux'
import Home from '../components/home'
import { setSelectedSpecieName } from '../../lifecycle/actions'

class HomeContainer extends Component {
    render() {
        return (
            <Home homeData={this.props} />
        )
    }
}

export default connect((state) => state.homeData, { setSelectedSpecieName })(HomeContainer)