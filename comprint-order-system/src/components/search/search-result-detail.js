import React from "react";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import StatusConditional from "./status-conditional";
import RenderLocationItem from "./render-location-item";
import {useDispatch, useSelector} from "react-redux";
import * as POService from "../services/purchase-order-service"


const SearchResultDetail = () => {
    const id = useParams();
    const pos = useSelector(state => state.pos);
    const current = useSelector(state => state.isLogged)
    const {state} = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const HandleEdit = () => {
        navigate("/order/edit/", {state: state.result})
    }

    const HandleShipping = () => {
        // give warning if there is already shipping data that it will be overwritten
        navigate(`/shipping/detail/${id.pid}`)
    }
    const HandleDelete = () => {
        const POToDelete = state.result;
        POService.deleteOrder(dispatch, POToDelete)
        navigate("/")
    }

    const handleLogin = () => {
        if(current.loggedIn){
            return(
                alert("logout!")
            )
        } else {
            navigate("/login")
        }
    }

    return(
        // add modal here
        <>
            <div className="bg-black d-grid fw-bold">
            <div className="container">
                <button onClick={handleLogin} type="button" className="d-block float-end btn btn-light btn-sm fw-bold m-2">
                    {current.loggedIn ? current.username + ' (Log Out)' : 'Log In' }
                </button>
                <Link to={"../search"}>
                    <i className="fa-solid fa-arrow-left-long text-white float-start ps-3 pt-2"></i>

                    <p className="text-center text-light">
                        Comprint Order System
                    </p>
                </Link>




            </div>




            </div>
            <h4 className="alert-info text-dark fw-bold p-2">
                PO number: {state.result.PONumber}
            </h4>

            <br/>
            <div className="btn-group float-end mt-4 me-4">
                <button onClick={HandleEdit} className="btn btn-info btn-sm text-dark fw-bold" type="button">
                    Edit
                </button>
                {current.department === "PRODUCTION" ? <button onClick={HandleShipping} className="btn btn-info btn-sm text-dark fw-bold" type="button">
                    Set Shipping
                </button> : ""}

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
                <span className="fw-bold">Shipping Address: </span>{state.result.address}, {state.result.state} {state.result.zip}
                <br/>
                <span className="fw-bold">Date Added: </span>{state.result.dateAdded}
                <br/>
                <span className="fw-bold">Added By: </span>{state.result.addedBy}
                <br/>
                <span className="fw-bold">Quantity: </span>{state.result.quantity}
                <br/>
                {state.result.updatedBy ?  <span className="fw-bold">Last Updated: </span>
                    : ""} {state.result.updateDate}

                <br/>
                {state.result.updatedBy ?  <span className="fw-bold">Updated by: </span>
                    : ""} {state.result.updatedBy}
                <br/>
                <span className="fw-bold">Locations:</span>
                <div className="container">

                    <RenderLocationItem location={state.result}/>
                </div>

                {state.result.shipping ?
                    <div className="mt-4">

                        <span className="fw-bold">Shipping Service:</span>

                            <div className="container">
                                Retail Rate: {state.result.shipping.retailRate}
                                <br />
                                Service: {state.result.shipping.Service}
                                <br />
                                Delivery Time: {state.result.shipping.deliveryTime}
                                <br />
                            </div>


                    </div>

                     : ""}


            </div>


        </>
    )

}
export default SearchResultDetail;