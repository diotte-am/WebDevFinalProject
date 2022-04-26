import PoReducer from "./po-reducer";
import LoggedReducer from "./logged-reducer";
import {combineReducers} from "redux";
import UserReduecer from "./user-reducer";

const allReducers = combineReducers({
    POS: PoReducer,
    isLogged: LoggedReducer,
    users: UserReduecer
});

export default allReducers;