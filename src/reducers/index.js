import {
    combineReducers
} from "redux";
import exploreData from "../features/explore/reducers";
import homeData from "../features/home/reducers";
import {
    userReducer
} from "../features/join/reducers";
import {
    specieReducer
} from "../features/lifecycle/reducers";

export default combineReducers({
    exploreData,
    homeData,
    userReducer,
    specieReducer,
})