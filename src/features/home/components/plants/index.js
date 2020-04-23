import React from 'react'
import GridItem from '../griditem'

const plants = (props) => {
    let plantGrids = props.gridData.map((plant, index) => <GridItem actions={{ setSelectedSpecieName: props.actions.setSelectedSpecieName }} key={index} name={plant.name} source={plant.source} bg={plant.bg} />)
    return (
        <React.Fragment>
            {plantGrids}
        </React.Fragment>
    )
}

export default plants
