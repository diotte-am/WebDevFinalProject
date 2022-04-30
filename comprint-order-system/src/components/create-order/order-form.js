import React from "react";
import {useState} from "react";
import PrintLocations from "./print-locations"
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import * as poService from "../services/purchase-order-service"


const OrderForm = () => {
    const navigate = useNavigate();
    const user = useSelector(state => state.isLogged);
    const dispatch = useDispatch();
    const[orderForm, setOrderForm] = useState({});
    const[printLocations, setPrintLocations] = useState([]);

    const addLocation = () => {

                if (printLocations.location !== undefined){
                    const newPrintLocation = {
                        location: printLocations.location,
                        flashes: printLocations.flashes,
                        colors: printLocations.colors
                    };


                    const newPrintLocations = [newPrintLocation, ...printLocations];
                    setPrintLocations(newPrintLocations)
                } else {
                    alert("Please choose an imprint location!")
                }

    }

    const deleteLocation = (locToDelete) => {
        const newLocations = printLocations.filter((loc) => loc === locToDelete ? false : true)
        setPrintLocations(newLocations)
    }

    const setFlashHandler = (e) => {
        const value = e.target.value;
        printLocations.flashes = value;
    }

    const setColorHandler = (e) => {
        const value = e.target.value;
        printLocations.colors = value;
    }

    const handlePONumber = (e) => {
        const newOrderform = {...orderForm, PONumber : e.target.value}
        setOrderForm(newOrderform)
    }

    const handleClient = (e) => {
        orderForm.client = e.target.value;
    }

    const handleDueDate = (e) => {
        orderForm.dueDate = e.target.value;
    }

    const handleQuantity = (e) => {
        orderForm.quantity = e.target.value;
    }

    const handleAddress = (e) => {
        orderForm.address = e.target.value;
    }

    const handleState = (e) => {
        orderForm.state = e.target.value;
    }

    const handleZip = (e) => {
        orderForm.zip = e.target.value;
    }

    const handleSumbit = () => {
        orderForm.location = printLocations;
        orderForm.dateAdded = new Date().toLocaleDateString('en-CA')
        orderForm.status = "RECEIVED"
        orderForm._id = new Date().getTime() + 2;
        orderForm.addedBy = user.username;
        setOrderForm(orderForm)
        navigate("/order/received", {state: {orderForm}})
        poService.createNewOrder(dispatch, orderForm)
    }


    return(
        <>

            <div className="container col-11 bg-light mt-4 d-grid rounded">
                <div className="row p-4">
                    <div className=" col-3">
                        <label htmlFor="PONumber" className="form-label">PO Number</label>
                        <input onChange={handlePONumber} type="text" className="form-control" id="PONumber"
                               placeholder="PO Number"/>
                    </div>

                    <div className=" col-3">
                        <label htmlFor="client" className="form-label">Client Name</label>
                        <input onChange={handleClient} type="text" className="form-control" id="client"
                               placeholder="Client name"/>
                    </div>
                </div>

                <div className="row p-4">
                    <div className="col-3">
                        <label htmlFor="dueDate" className="form-label">Due Date</label>
                        <input onChange={handleDueDate} type="date" className="form-control" id="dueDate"
                               placeholder="mm/dd/yy"/>
                    </div>

                    <div className="col-3">
                        <label htmlFor="quantity" className="form-label">Quantity</label>
                        <input onChange={handleQuantity} type="text" className="form-control" id="quantity"
                               placeholder="Enter quantity"/>
                    </div>
                </div>

                <div className="row p-4">
                    <div className="col-6">
                        <label  htmlFor="address" className="form-label">Address</label>
                        <input onChange={handleAddress} type="text" className="form-control" id="address"
                               placeholder="123 Street Name"/>
                    </div>

                    <div className="col-2">
                        <label htmlFor="state" className="form-label">State</label>
                        <input onChange={handleState} type="text" className="form-control" id="state"
                               placeholder="ex: MA"/>
                    </div>
                    <div className="col-2">
                        <label htmlFor="zip" className="form-label">Zip</label>
                        <input onChange={handleZip} type="text" className="form-control" id="zip"
                               placeholder="ex: 02466"/>
                    </div>
                </div>

                <div className="row p-4">

                    <hr/>
                    Add each print location:
                    <div className="container input-group-t mt-4 row">
                        <div className="col-3">
                            Location:
                            <select defaultValue={printLocations.location} onChange={(e) => printLocations.location = (e.target.value)} className="form-select" id="searchParametersAll" aria-label="Search by Status">
                                <option value="tbd">Choose Location</option>
                                <option value="Full Front">Full Front</option>
                                <option value="Full Back">Full Back</option>
                                <option value="Left Chest">Left Chest</option>
                                <option value="Right Chest">Right Chest</option>
                                <option value="Right Sleeve">Right Sleeve</option>
                                <option value="Left Sleeve">Left Sleeve</option>
                                <option value="Back Yoke">Back Yoke</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="col-2">
                            Flashes:
                            <select defaultValue="tbd" onChange={setFlashHandler} className="form-select" id="FLASH" aria-label="FLASHES">
                                <option value="tbd">Choose</option>
                                <option value="0" >0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                        </div>
                        <div className="col-2">
                            # of Colors: <select onChange={setColorHandler} className="form-select" id="COLOR" aria-label="COLORS" value={printLocations.flashes }>
                            <option value="tbd">Choose</option>
                            <option value="1">1 Spot</option>
                            <option value="2">2 Spots</option>
                            <option value="3">3 Spots</option>
                            <option value="4">4 Spots</option>
                            <option value="5">5 Spots</option>
                            <option value="6">6 Spots</option>
                            <option value="7">7 Spots</option>
                            <option value="8">8 Spots</option>
                            <option value="9">9 Spots</option>
                            <option value="10">10 Spots</option>
                        </select>
                        </div>
                    </div>

                    <div className="d-block align-items-center">
                        <button onClick={() => {addLocation()}} className="m-3 btn btn-secondary btn-sm fw-bold">
                            Add Location
                        </button>
                    </div>
                    <PrintLocations
                        locations={printLocations}
                        deleteLocation = {deleteLocation}/>
                </div>
                <hr/>

                <div className="d-block align-items-center">
                    <button onClick={handleSumbit} className="m-3 btn btn-secondary fw-bold">
                        Submit
                    </button>

            </div>

            </div>

        </>

    )

}
export default OrderForm;