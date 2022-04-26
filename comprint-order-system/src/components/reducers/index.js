import PoReducer from "./po-reducer";
import LoggedReducer from "./logged-reducer";
import {combineReducers} from "redux";
import UserReducer from "./user-reducer";

const allReducers = combineReducers({
    POS: PoReducer,
    isLogged: LoggedReducer,
    users: UserReducer
});

export default allReducers;