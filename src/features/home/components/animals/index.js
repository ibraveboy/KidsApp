import React from 'react'
import GridItem from '../griditem'

const animals = (props) => {
    let animalGrids = props.gridData.map((animal, index) => <GridItem actions={{ setSelectedSpecieName: props.actions.setSelectedSpecieName }} key={index} name={animal.name} source={animal.source} bg={animal.bg} />)
    return (
        <React.Fragment>
            {animalGrids}
        </React.Fragment>
    )
}

export default animals
