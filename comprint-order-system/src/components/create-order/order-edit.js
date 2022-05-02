import React from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import * as poService from "../services/purchase-order-service"

const OrderEdit = () => {
    const {state} = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.isLogged);

    const received = (e) => {
        state.status = "RECEIVED"
        console.log(state.status)
    }
    const proofed = (e) => {
        state.status = "PROOFED"
        console.log(state.status)
    }
    const approved = (e) => {
        state.status = "APPROVED"
        console.log(state.status)
    }

    const printed = (e) => {
        state.status = "PRINTED"
        console.log(state.status)
    }


    const handleName = (e) => {
        state.client = e.target.value;
    }
    const handleDueDate = (e) => {
        state.dueDate = e.target.value;
    }
    const handleQuantity = (e) => {
        state.quantity = e.target.value;
    }

    const handleButton = () => {
        poService.updateOrder(dispatch, state)
        navigate("/")
    }
    return (
<>

    <div className="bg-black d-grid fw-bold">
        <Link to={"../search"}>
            <span className="text-white fw-bold"> Cancel Edits </span>
            <i className="fa-solid fa-arrow-left-long text-white float-start ps-3 pt-2 me-2"></i>

            <p className="text-center text-light">
                Comprint Order System
            </p>
        </Link>

    </div>
    <h4 className="alert-secondary text-dark fw-bold p-2">
        Editing PO# {state.PONumber}
    </h4>

<div className="container col-11 bg-light mt-4 d-grid rounded">

    <div className=" col-6">
        <label htmlFor="client" className="form-label mt-2">Client</label>
        <input onChange={handleName} type="text" className="form-control" id="client" defaultValue={state.client}/>
    </div>
    <hr/>
    <div className=" col-6">
        <label htmlFor="dueDate" className="form-label mt-2">Due Date</label>
        <input onChange={handleDueDate} type="date" className="form-control" id="dueDate" /> CURRENT DUE DATE: {state.dueDate}
    </div>
<hr/>
    <div className=" col-6">
        <label htmlFor="client" className="form-label mt-2">Quantity</label>
        <input onChange={handleQuantity} type="text" className="form-control" id="quantity" defaultValue={state.quantity}/>
    </div>
    <hr/>



        {user.department === "ART" ?
            <div className="btn-group float-end mt-4 me-4">
                <button onClick={received} className="btn btn-secondary btn-sm text-dark fw-bold" type="button">
                    Received
                </button>
                <button onClick={proofed} className="btn btn-warning btn-sm text-dark fw-bold" type="button">
                    Proofed
                </button>
                <button onClick={approved} className="btn btn-info btn-sm text-dark fw-bold" type="button">
                    Approved
                </button>
                <button onClick={printed} className="btn btn-dark btn-sm text-light fw-bold" type="button">
                    Printed
                </button>

            </div> :
            <div className="btn-group float-end mt-4 me-4">
                <button onClick={printed} className="btn btn-dark btn-sm text-light fw-bold" type="button">
                    Printed
                </button>

            </div>
        }


    <div>
        <button onClick={handleButton} className="btn btn-secondary float-end m-3">
            Submit
        </button>
    </div>







</div>





</>

    )
}
export default OrderEdit;