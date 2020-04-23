import React from 'react'
import GridItem from '../griditem'

const birds = (props) => {
    let birdGrids = props.gridData.map((bird, index) => <GridItem actions={{ setSelectedSpecieName: props.actions.setSelectedSpecieName }} key={index} name={bird.name} source={bird.source} bg={bird.bg} />)
    return (
        <React.Fragment>
            {birdGrids}
        </React.Fragment>
    )
}

export default birds
