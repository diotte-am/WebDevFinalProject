import React from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import StatusConditional from "./status-conditional";
import RenderLocationItem from "./render-location-item";
import {useDispatch} from "react-redux";


const SearchResultDetail = () => {
    const {state} = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const HandleEdit = () => {
        navigate("/order/edit/", {state: state.result})
    }

    const HandleShipping = () => {
        // give warning if there is already shipping data that it will be overwritten
        alert("edit shipping for " + state.result.PONumber)
    }
    const HandleDelete = () => {
        dispatch({type: "deleteOrder", payload: state.result._id})
        navigate("/search")
    }


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
            <div className="btn-group float-end mt-4 me-4">
                <button onClick={HandleEdit} className="btn btn-info btn-sm text-dark fw-bold" type="button">
                    Edit
                </button>
                <button onClick={HandleShipping} className="btn btn-info btn-sm text-dark fw-bold" type="button">
                    Set Shipping
                </button>
                <button onClick={HandleDelete} className="btn btn-info btn-sm text-dark fw-bold" type="button">
                    Delete
                </button>

            </div>
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

                    <RenderLocationItem location={state.result}/>
                </div>


            </div>


        </>
    )

}
export default SearchResultDetail;