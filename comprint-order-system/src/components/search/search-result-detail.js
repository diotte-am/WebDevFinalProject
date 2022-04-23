import React from "react";
import {Link, useLocation} from "react-router-dom";
import StatusConditional from "./status-conditional";
import RenderLocationItem from "./render-location-item";


const SearchResultDetail = () => {
    const {state} = useLocation();

    return(
        // add modal here
        <>
            <div className="bg-black d-grid fw-bold">
                <Link to={"../search"}>
                    <i className="fa-solid fa-arrow-left-long text-white float-start ps-3 pt-2"></i>

                    <p className="text-center text-light">
                        Comprint Order System
                    </p>
                </Link>

            </div>
            <h4 className="alert-info text-dark fw-bold p-2">
                PO number: {state.result.PONumber}
            </h4>

            <br/>
            <div className="container alert-light pt-2 pb-2 rounded">
                <span className="fw-bold">Status: </span><StatusConditional result={state.result}/>
                <br/>
                <span className="fw-bold">Due Date: </span>{state.result.dueDate}
                <br/>
                <span className="fw-bold">Client: </span>{state.result.client}
                <br/>
                <span className="fw-bold">Date Added: </span>{state.result.dateAdded}
                <br/>
                <span className="fw-bold">Quantity: </span>{state.result.quantity}
                <br/>
                <span className="fw-bold">Locations:</span>
                <div className="container">
                    <RenderLocationItem location={state.result.location}/>
                </div>
            </div>


        </>
    )

}
export default SearchResultDetail;