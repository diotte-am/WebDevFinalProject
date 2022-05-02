import React from "react";
import * as shipService from "../services/shipping-service"
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate, useParams} from "react-router-dom";
import ShippingResults from "./shipping-results";



const ShippingDetails = () => {
    const loggedIn = useSelector(state => state.isLogged.loggedIn)
    const username = useSelector(state => state.isLogged.username)
    const rates = useSelector(state => state.shipping);
    const pos = useSelector(state => state.POS);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const pid = useParams();
    const currentOrder = pos.find(p => p._id === pid.pid)

    const handleLogin = () => {
        if(loggedIn){
            dispatch({type: "logOut"})
            navigate("/")
        } if(!loggedIn) {
            navigate("home/login")
        }
    }

    const address =
        {
            company: 'Comprint',
            street1: '216 Newton St',
            street2: 'R',
            city: 'Waltham',
            state: 'MA',
            zip: '02453',
            phone: '617-999-9999'
        }



    const findByAddress = () => {
        shipService.findByAddress(dispatch, address);
    }

    return(
        <>
            <div className="bg-black d-grid fw-bold">

                <Link to={"/shipping"}>
                    <i className="fa-solid fa-arrow-left-long text-white  ps-3 pt-2"></i>
                    <button onClick={handleLogin} type="button" className="d-block float-end btn-sm btn-light fw-bold m-2 text-dark">
                        {loggedIn ? username + ' (Log Out)' : 'Log In' }
                    </button>

                </Link>
                <p className="text-center text-light">
                    Comprint Order System
                </p>

            </div>
            <h4 className="alert-light text-dark fw-bold p-2">
                Details for PO# {currentOrder.PONumber}
            </h4>

            <hr />

            <button className="btn btn-outline-danger" onClick={findByAddress}> Find Shipping Rates! </button>
            <ShippingResults results={rates} current={currentOrder}/>

        </>
    )

}
export default ShippingDetails;