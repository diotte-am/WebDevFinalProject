import React from "react";

import {useSelector} from "react-redux";



const Recents = (logged) => {
    console.log("recent user:" + logged.username)
    const store = useSelector(state => state.POS)
    return(
        <>
            <div className="container bg-light col-10 mt-4 d-grid text-center rounded">

                {store.map(po => {
                    if((logged.current === po.addedBy || logged.current === po.updatedBy)){
                        return(
                            <>
                                Orders recently added or updated by: {logged.current}
                                <br/>
                                <div className="alert-light rounded">
                                    <div className="fw-bold">Purchase Order {po.PONumber}</div>

                                    <span className="fw-bold">Status: {po.status}</span>
                                    <br/>
                                    <span className="fw-bold">Due Date: </span>{po.dueDate}
                                    <br/>
                                    <span className="fw-bold">Client: </span>{po.client}
                                    <br/>
                                    <span className="fw-bold">Date Added: </span>{po.dateAdded}
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



                    } else {
                        return(
                            <>
                                <br/>
                                Recently Added POs:
                                <div className="alert-light rounded mb-3">
                                    <div className="fw-bold">Purchase Order {po.PONumber}</div>

                                    <span className="fw-bold">Status: {po.status}</span>
                                    <br/>
                                    <span className="fw-bold">Due Date: </span>{po.dueDate}
                                    <br/>
                                    <span className="fw-bold">Client: </span>{po.client}
                                    <br/>
                                    <span className="fw-bold">Date Added: </span>{po.dateAdded}
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
                    }
                })}



            </div>
        </>
    )
}
export default Recents;