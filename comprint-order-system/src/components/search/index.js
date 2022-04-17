import React from "react";
import {Link} from "react-router-dom";

const Search = () => {
    return(
        <>
            <div className="bg-black d-grid fw-bold">
                <Link to={"../"}>
                    <i className="fa-solid fa-arrow-left-long text-white float-start ps-3 pt-2"></i>

                    <p className="text-center text-light">
                        Comprint Order System
                    </p>
                </Link>

            </div>
            <h4 className="alert-info text-dark fw-bold p-2">
                Search Purchase Orders
            </h4>

            <div className="container ps-3 pe-3">
                <p className="form-label mt-4 left">Search by a term:</p>
                <div className="input-group">
                    <select className="form-select pb-2" id="inputGroupSelect04" aria-label="Example select with button addon">
                        <option defaultValue>Select</option>
                        <option value="PONumber">PO Number</option>
                        <option value="ClientName">Client Name</option>
                        <option value="DueDate">Due Date</option>
                        <option value="DateReceived">Date Received</option>
                    </select>
                    <input className="input-group-text col-9 text-start" placeholder="Search order system" />
                    <button className="btn btn-info btn-dark fw-bold" type="button">Search</button>
                </div>

                <p className="form-label mt-4">View all orders:</p>
                <div className="input-group">
                    <select className="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                        <option value="AllOrders" defaultValue>All Orders</option>
                        <option value="AllOrdersReceived">to be proofed</option>
                        <option value="AllOrdersProofed">waiting for art approval</option>
                        <option value="AllOrdersApproved">in production</option>
                        <option value="AllOrdersPrinted">ready to be invoiced</option>
                    </select>
                    <button className="btn btn-info  fw-bold text-dark" type="button">View</button>
                </div>
            </div>
        </>
    )

};

export default Search;