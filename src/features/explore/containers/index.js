import Explore from "../components/explore";
import { connect } from "react-redux";
import { setCategoryName } from "../../home/actions";

const mapStateToProps = (state)=>{
    return state
}

export default connect(mapStateToProps,{setCategoryName})(Explore)