import React from "react";

const orderForm = () => {
    return(
        <>
            <div className="container col-11 bg-light mt-4 d-grid rounded">
                <div className="row p-4">
                    <div className=" col-3">
                        <label htmlFor="PONumber" className="form-label">PO Number</label>
                        <input type="text" className="form-control" id="PONumber"
                               placeholder="PO Number"/>
                    </div>

                    <div className=" col-3">
                        <label htmlFor="client" className="form-label">Client Name</label>
                        <input type="text" className="form-control" id="client"
                               placeholder="Client name"/>
                    </div>
                </div>

                <div className="row p-4">
                    <div className="col-3">
                        <label htmlFor="dueDate" className="form-label">Due Date</label>
                        <input type="text" className="form-control" id="dueDate"
                               placeholder="mm/dd/yy"/>
                    </div>

                    <div className="col-2">
                        <label htmlFor="quantity" className="form-label">Quantity</label>
                        <input type="text" className="form-control" id="quantity"
                               placeholder="Enter quantity"/>
                    </div>
                </div>

                <div className="row p-4">
                    <div className="col-6">
                        <label htmlFor="address1" className="form-label">Address</label>
                        <input type="text" className="form-control" id="address1"
                               placeholder="123 Street Name"/>
                    </div>

                    <div className="col-2">
                        <label htmlFor="quantity" className="form-label">State</label>
                        <input type="text" className="form-control" id="state"
                               placeholder="ex: MA"/>
                    </div>
                    <div className="col-2">
                        <label htmlFor="quantity" className="form-label">Zip</label>
                        <input type="text" className="form-control" id="zip"
                               placeholder="ex: 02466"/>
                    </div>
                </div>

                <div className="row p-4">
                    <hr/>
                    <p>Print locations (choose all that apply):

                    </p>

                    <div className="form-check form-check-inline">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input list-group-item-secondary" type="checkbox" id="leftChest" value="leftChest"/>
                                <label className="form-check-label" htmlFor="leftChest">Left Chest</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input list-group-item-secondary" type="checkbox" id="rightChest" value="rightChest"/>
                                <label className="form-check-label" htmlFor="inlineCheckbox2">Right Chest</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input list-group-item-secondary" type="checkbox" id="fullFront" value="fullFront"/>
                                <label className="form-check-label" htmlFor="rightChest">Full Front</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input list-group-item-secondary" type="checkbox" id="fullBack" value="fullBack"/>
                            <label className="form-check-label" htmlFor="fullBack">Full Back</label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input list-group-item-secondary" type="checkbox" id="rightSleeve" value="rightSleeve"/>
                            <label className="form-check-label" htmlFor="rightSleeve">Right Sleeve </label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input list-group-item-secondary" type="checkbox" id="leftSleeve" value="leftSleeve"/>
                            <label className="form-check-label" htmlFor="leftSleeve">Left Sleeve </label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input list-group-item-secondary" type="checkbox" id="backYoke" value="backYoke"/>
                            <label className="form-check-label" htmlFor="backYoke">Back Yoke </label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input list-group-item-secondary" type="checkbox" id="lowBack" value="lowBack"/>
                            <label className="form-check-label" htmlFor="lowBack">Low Back </label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input list-group-item-secondary" type="checkbox" id="other" value="other"/>
                            <label className="form-check-label" htmlFor="other">Other </label>
                        </div>

                     </div>

                </div>
                <div className="d-block align-items-center">
                    <button className="m-3 btn btn-secondary">
                        Submit
                    </button>

                </div>

            </div>



        </>

    )

}
export default orderForm;