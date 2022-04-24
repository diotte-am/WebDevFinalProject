import React from "react";
import {Link} from "react-router-dom";
import Recents from "./recents";
import {useSelector} from "react-redux";


const Home = () => {
    const loggedIn = useSelector(state => state.isLogged)

    return(
        <>

            <Link to="login">
                <button type="button" className="d-block float-end btn btn-outline-dark fw-bold">
                    {loggedIn ? 'Log Out' : 'Log In' }
                </button>
            </Link>
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

                <Link to="profile" className="d-grid col-5 container align-content-center">
                    <button type="button" className="btn btn-warning m-2 text-dark fw-bold">Profile</button>
                </Link>

                <Link to="detail" className="d-grid col-5 container align-content-center">
                    <button type="button" className="btn btn-dark m-2 fw-bold">Get Shipping Rates</button>
                </Link>

            <Recents />





        </>
    )};

export default Home;