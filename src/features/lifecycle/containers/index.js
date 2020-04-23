import {
    connect
} from "react-redux"
import SpecieLifeStyle from "../components/lifecycle"

const mapStateToProps = (state) => {
    return state.specieReducer
}

export default connect(mapStateToProps, null)(SpecieLifeStyle)