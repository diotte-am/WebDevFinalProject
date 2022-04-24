import React from "react";
import StatusConditional from "../search/status-conditional";
import {useSelector} from "react-redux";



const Recents = () => {
    const store = useSelector(state => state.POS)
    return(
        <>
            <div className="container bg-light col-10 mt-4 d-grid text-center rounded">
                <div className="p-1 text-reset">Recently Added POs:</div>
                {store.map(po => {
                    return(
                        <>
                            <br/>
                            <div className="alert-light rounded">
                                <div className="fw-bold">Purchase Order {po.PONumber}</div>

                                <span className="fw-bold">Status: {po.status}</span>
                                <br/>
                                <span className="fw-bold">Due Date: </span>{po.dueDate}
                                <br/>
                                <span className="fw-bold">Client: </span>{po.client}
                                <br/>
                                <span className="fw-bold">Date Added: </span>{po.dateAdded.toString()}
                                <br/>
                                <span className="fw-bold">Quantity: </span>{po.quantity}
                                <br/>
                                <span className="fw-bold">Locations:</span>
                                <div className="container">

                                    {po.location.map((loc) => {
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

                    )

                })}

                <p className="p-1">Recently Saved Shipping Rates:</p>


            </div>
        </>
    )
}
export default Recents;