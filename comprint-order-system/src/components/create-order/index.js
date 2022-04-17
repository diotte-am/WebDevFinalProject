import React from "react";

import {Link} from "react-router-dom";
import OrderForm from "./order-form";

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
            <h4 className="alert-secondary text-dark fw-bold p-2">
                Create New Order
            </h4>
            <OrderForm />


        </>
    )

}
export default detail;