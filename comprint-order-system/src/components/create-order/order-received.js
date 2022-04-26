import React from "react";
import {Link, useLocation} from "react-router-dom";
import StatusConditional from "../search/status-conditional";


const OrderReceived = () => {
    const {state} = useLocation();
    return (
        // generate a confirmation number based on time. Save it to purchase order, add as a search field.
        // add component showing the order summary formatted.
        <>
            <>
                <div className="bg-black d-grid fw-bold">
                    <Link to={"../order"}>
                        <span className="text-white fw-bold"> Enter New Order </span>
                        <i className="fa-solid fa-arrow-left-long text-white float-start ps-3 pt-2 me-2"></i>

                        <p className="text-center text-light">
                            Comprint Order System
                        </p>
                    </Link>

                </div>
                <h4 className="alert-secondary text-dark fw-bold p-2">
                    PO number: {state.orderForm.PONumber} entered by {state.orderForm.addedBy}
                </h4>

                <br/>
                <div className="container alert-light pt-2 pb-2 rounded">
                    <h2 className="fw-bold">Purchase Order {state.orderForm.PONumber} Received!</h2>
                    <h5 className="fw-bold"> Order Summary:</h5>
                    <span className="fw-bold">Status: </span><StatusConditional result={state}/>
                    <br/>
                    <span className="fw-bold">Due Date: </span>{state.orderForm.dueDate}
                    <br/>
                    <span className="fw-bold">Client: </span>{state.orderForm.client}
                    <br/>
                    <span className="fw-bold">Date Added: </span>{state.orderForm.dateAdded.toString()}
                    <br/>
                    <span className="fw-bold">Quantity: </span>{state.orderForm.quantity}
                    <br/>
                    <span className="fw-bold">Locations:</span>
                    <div className="container">

                        {state.orderForm.location.map((loc) => {
                            loc.key = loc.location
                            return(
                                <div key={loc.location}>
                                {loc.location + ": (" + loc.colors + "C, " + loc.flashes + "F )" }
                                    <br/>
                                </div>
                            )})}
                    </div>
                </div>


            </>



        </>

    )}
export default OrderReceived;