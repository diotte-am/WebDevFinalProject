import React from "react";
import {Link, useLocation} from "react-router-dom";

const OrderEdit = () => {
    const {state} = useLocation();

    return (
<>
    {console.log(JSON.stringify({state}))}
    <div className="bg-black d-grid fw-bold">
        <Link to={"../search"}>
            <span className="text-white fw-bold"> Cancel Edits </span>
            <i className="fa-solid fa-arrow-left-long text-white float-start ps-3 pt-2 me-2"></i>

            <p className="text-center text-light">
                Comprint Order System
            </p>
        </Link>

    </div>
    <h4 className="alert-secondary text-dark fw-bold p-2">
        Editing PO# {state.PONumber}
    </h4>


    <div className=" col-6">
        <label htmlFor="client" className="form-label mt-2">Client</label>
        <input  type="text" className="form-control" id="client" placeholder={state.client} checked/>
    </div>





</>

    )
}
export default OrderEdit;