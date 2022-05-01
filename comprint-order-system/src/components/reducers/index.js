import PoReducer from "./po-reducer";
import LoggedReducer from "./logged-reducer";
import {combineReducers} from "redux";
import UserReducer from "./user-reducer";
import ShippingReducer from "./shipping-reducer";

const allReducers = combineReducers({
    POS: PoReducer,
    isLogged: LoggedReducer,
    users: UserReducer,
    shipping: ShippingReducer
});

export default allReducers;