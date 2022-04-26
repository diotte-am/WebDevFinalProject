import React from "react";
import ShippingDetails from "./shipping-details";
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const Detail = () => {
    const loggedIn = useSelector(state => state.isLogged.loggedIn)
    const username = useSelector(state => state.isLogged.username)
    const navigate = useNavigate();
    const handleLogin = () => {
        if(loggedIn){
            return(
                alert("logout!")
            )
        } else {
            navigate("login")
        }
    }
    return(
        <>
            <div className="bg-black d-grid fw-bold">

                <Link to={"../"}>
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
                Details
            </h4>

            <hr />
            <ShippingDetails />

        </>
    )

}
export default Detail;