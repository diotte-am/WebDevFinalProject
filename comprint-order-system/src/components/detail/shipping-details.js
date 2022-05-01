import React from "react";
import * as shipService from "../services/shipping-service"
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";


const ShippingDetails = () => {
    const dispatch = useDispatch();


    const findAllRates = () => {
        shipService.findAllRates(dispatch);
    }

    const rates = useSelector(state => state.shipping);

    useEffect(() => {
        findAllRates();
    })
    return(
        <>

            {rates.map(rate => {
                return (
                    <div>
                        <br />
                        Service: {rate.service}
                        <br/>
                        Rate: {rate.retail_rate}
                        <br/>
                        Delivery Days: {rate.delivery_days}
                        <br/>
                        <button> Choose </button>

                    </div>
                    )


            })}
        </>
    )

}
export default ShippingDetails;