import React from "react";

const StatusConditional = (order) => {
    return (
        <>

            <span className={`
                        ${order.result.status === "RECEIVED" ?  "list-group-item-secondary": ''}
                        ${order.result.status === "PROOFED" ?  "list-group-item-warning": ''}
                        ${order.result.status === "APPROVED" ?  "list-group-item-info": ''}
                        ${order.result.status === "PRINTED" ?  "list-group-item-dark": ''}
                        `}>{order.result.status}</span>


        </>
    )}




export default StatusConditional