import React from "react";

const Search = () => {
    return(
        <>
            <header className="alert-dark text-center fw-bold text-light p">
                Comprint Order System
            </header>
            <h3 className="alert-info text-center text-dark fw-bold p-2">
                Search Purchase Orders
            </h3>


            <p className="form-label mt-4">Search by a term:</p>
            <div className="input-group">
                <select className="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                    <option selected>Search by...</option>
                    <option value="PONumber">PO Number</option>
                    <option value="ClientName">Client Name</option>
                    <option value="DueDate">Due Date</option>
                    <option value="DateReceived">Date Received</option>
                </select>
                <input className="input-group-text col-10" placeholder="Search order system" />
                <button className="btn btn-outline-info" type="button">Search</button>
            </div>

            <p className="form-label mt-4">View all orders:</p>
            <div className="input-group">
                <select className="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                    <option value="AllOrders" selected>All Orders</option>
                    <option value="AllOrdersReceived">to be proofed</option>
                    <option value="AllOrdersProofed">waiting for art approval</option>
                    <option value="AllOrdersApproved">in production</option>
                    <option value="AllOrdersPrinted">ready to be invoiced</option>
                </select>
                <button className="btn btn-outline-info" type="button">View</button>
            </div>

        </>


    )

};

export default Search;