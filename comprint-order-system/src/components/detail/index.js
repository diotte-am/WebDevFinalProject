import React from "react";
import ShippingDetails from "./shipping-details";
import {Link} from "react-router-dom";

const detail = () => {
    return(
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
                Get Shipping Rate
            </h4>


            <ShippingDetails />

        </>
    )

}
export default detail;