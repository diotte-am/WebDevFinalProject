import React from "react";

const StatusConditional = (order) => {

    return (
        <>
            <span className={`
                        ${order.result.orderForm.status === "RECEIVED" ?  "list-group-item-secondary": ''}
                        ${order.result.orderForm.status === "PROOFED" ?  "list-group-item-warning": ''}
                        ${order.result.orderForm.status === "APPROVED" ?  "list-group-item-info": ''}
                        ${order.result.orderForm.status === "PRINTED" ?  "list-group-item-dark": ''}
                        `}>{order.result.orderForm.status}</span>


        </>
    )}




export default StatusConditional