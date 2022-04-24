import PoReducer from "./po-reducer";
import LoggedReducer from "./logged-reducer";
import {combineReducers} from "redux";

const allReducers = combineReducers({
    POS: PoReducer,
    isLogged: LoggedReducer
});

export default allReducers;