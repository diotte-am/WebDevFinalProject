import React from "react";
import {useLocation} from "react-router-dom";

const OrderReceived = () => {
    const {state} = useLocation();
    return (
        // generate a confirmation number based on time. Save it to purchase order, add as a search field.
        // add component showing the roder summary formatted.
        <>
            Purchase Order {state.orderForm.PONumber} Received!
            Order Summary:



        </>

    )}
export default OrderReceived;