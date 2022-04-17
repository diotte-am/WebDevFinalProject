import React from "react";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <>
            <div className="bg-black d-grid fw-bold">
                <Link to={"../"}>
                    <i className="fa-solid fa-arrow-left-long text-white float-start ps-3 pt-2"></i>

                    <p className="text-center text-light">
                        Comprint Order System
                    </p>
                </Link>

            </div>
            <h4 className="alert-light text-dark fw-bold p-2">
                Login
            </h4>
            <div className="container col-11 bg-light mt-4 d-grid rounded d-block ">

                    <div className=" col-3 pb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username"
                               placeholder="Username"/>
                    </div>

                    <div className=" col-3 pb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="text" className="form-control" id="password"
                               placeholder="Password"/>
                    </div>

                <div className=" col-3 pb-3">
                   <button className="float-end btn-secondary btn">
                        Submit
                    </button>
                </div>


            </div>

        </>
    )
}

export default Login;