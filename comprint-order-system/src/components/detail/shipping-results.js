import React from "react";
import {Button} from "react-bootstrap";
import {useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import * as POService from "../services/purchase-order-service"
import {useDispatch} from "react-redux";

const ShippingResults = (results) => {
    const pos = useSelector(state => state.POS);
    const pid = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentOrder = pos.find(p => p._id === pid.pid)
    const handleSave = (r) => {

        const shipping = {
            "retailRate": r.retail_rate,
            "Service": r.service,
            "deliveryTime" : r.est_delivery_days
        }
        currentOrder.shipping = {...shipping}
        POService.updateOrder(dispatch, currentOrder);
        console.log(currentOrder)
        alert("Shipping added to order: " + r.service)


    }

    if(results.results){
        if(results.results.data){
            if(results.results.data.rates){
                const rates = results.results.data.rates
                return(
                    <div className="text-center fw-bold mt-4">
                        Available Shipping Options:
                        <br/>
                        {rates.map(r => {
                            return(
                                <div className="alert-light p-2 d-block text-center container">
                                    <div>
                                        Retail Rate: {r.retail_rate}
                                        <br />
                                        Service: {r.service}
                                        <br />
                                        Delivery Time: {r.est_delivery_days}
                                        <br />
                                    </div>
                                    <div>
                                        <Button onClick={() => handleSave(r)} className="btn btn-dark m-2">
                                            Save
                                        </Button>
                                    </div>
                                    <hr/>




                                </div>
                            )
                        })}

                    </div>
                )
            }
        }

    } else {
        return (
            <>
                no shipping info found
            </>
        )
    }



}
export default ShippingResults;