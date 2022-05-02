import React, {useState} from "react";
import ShippingDetails from "./shipping-details";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import * as POService from "../services/purchase-order-service"
import {useEffect} from "react";

const Detail = () => {
    const loggedIn = useSelector(state => state.isLogged.loggedIn)
    const username = useSelector(state => state.isLogged.username)
    const POS = useSelector(state => state.POS);
    const findAllOrders = () => {
        POService.findAllOrders(dispatch);
    }
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchForm, updateSearchForm] = useState('')


    const handleLogin = () => {
        if(loggedIn){
            dispatch({type: "logOut"})
                navigate("/")
        } if(!loggedIn) {
            navigate("/login")
        }
    }
    const handleSearch = (e) => {
        const PONumber = e.target.value;
        updateSearchForm(PONumber)

    }
    const HandleShipping = () => {
        const pid = POS.find(p => p.PONumber === searchForm)
        navigate(`/shipping/detail/${pid._id}`)
    }

    useEffect(() => {
        findAllOrders();
    })

    return(
        <>
            <div className="bg-black d-grid fw-bold">
                    <div className="container">
                        <Link to={"../"}>
                            <i className="fa-solid fa-arrow-left-long text-white  ps-3 pt-2"></i>
                        </Link>
                        <button onClick={handleLogin} type="button" className="d-block float-end btn-sm btn-light fw-bold m-2 text-dark">
                            {loggedIn ? username + ' (Log Out)' : 'Log In' }
                        </button>
                    </div>
                    <p className="text-center text-light">
                        Comprint Order System
                    </p>
                </div>
            <h4 className="alert-light text-dark fw-bold p-2">
                Shipping Rate Lookup
            </h4>

            <hr />

            <div className="col-3">
                <label htmlFor="POShip" className="form-label">Enter purchase order below:</label>
                <input onChange={handleSearch} type="text" className="form-control" id="POShip"
                       placeholder="PO Number"/>
                <button onClick={HandleShipping} className="btn btn-dark mt-3">
                    Submit
                </button>
            </div>


        </>
    )

}
export default Detail;