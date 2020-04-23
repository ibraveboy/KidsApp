import {
    connect
} from "react-redux";
import Join from "../components/join";
import {
    editUserField,
    setAllUserFields
} from "../actions";

const mapStateToProps = (state) => {
    return state.userReducer
}

export default connect(mapStateToProps, {
    editUserField,
    setAllUserFields
})(Join)