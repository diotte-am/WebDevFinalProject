import React, {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import Recents from "./recents";
import {useDispatch, useSelector} from "react-redux";
import * as POService from "../services/purchase-order-service";



const Home = () => {
    const logged = useSelector(state => state.isLogged)

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleLogin = () => {
        if(logged.loggedIn){
            dispatch({type: "logOut"})
            return(
                navigate("/")
            )
        } else {
            navigate("login")
        }
    }
    const getAllOrders = () => {
        POService.findAllOrders(dispatch);
    }

    useEffect(() => {
        getAllOrders();
    })

    return(


        <>
                <button onClick={handleLogin} type="button" className="d-block float-end btn btn-outline-dark fw-bold">
                    {logged.loggedIn ? logged.username + ' (Log Out)' : 'Log In' }
                </button>

                <img className="d-block mx-auto mt-4 mb-4" src='../images/comprint-logo.png' alt="comprintLogo"/>
                <h2 className="alert-dark text-center fw-bold pt-1 pb-2 mb-3">
                    Comprint Order System
                </h2>

            <p className="container rounded ps-3 pe-3 p-2 alert-light text-center">
                This is a database of all active orders, please email admin@comprint.com for information on any orders that have already been shipped or invoiced.
            </p>
                <Link to="search" className="d-grid col-5 container align-content-center">
                    <button type="button" className="btn btn-info m-2 text-dark fw-bold">Search Orders</button>
                </Link>

                <Link to="order" className="d-grid col-5 container align-content-center">
                    <button type="button" className="btn btn-secondary m-2 text-dark fw-bold">Create New Order</button>
                </Link>

                <Link to={"profile"} className="d-grid col-5 container align-content-center">
                    <button type="button" className="btn btn-warning m-2 text-dark fw-bold">Profile</button>
                </Link>
            {logged.department === "PRODUCTION" ?
                <Link to="shipping" className="d-grid col-5 container align-content-center">
                    <button type="button" className="btn btn-dark m-2 fw-bold">Get Shipping Rates</button>
                </Link>
            : ""}


            <Recents current={logged.username}/>





        </>
    )};

export default Home;