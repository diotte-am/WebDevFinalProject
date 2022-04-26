import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import SearchResultList from "./search-result-list"
import {useSelector} from "react-redux";


const Search = () => {
    const orders = useSelector(state => state.POS);
    const [search, setSearch] = useState([...orders])

    const loggedIn = useSelector(state => state.isLogged.loggedIn)
    const username = useSelector(state => state.isLogged.username)
    const navigate = useNavigate();
    const handleLogin = () => {
        if(loggedIn){
            return(
                alert("logout!")
            )
        } else {
            navigate("login")
        }
    }

    const handleStatus = (e) => {
        const value = e.target.value;
        switch(value){
            case "ALL":
                setSearch(orders)
                break;
            case "RECEIVED":
                setSearch(orders.filter(po => po.status === "RECEIVED"))
                break;
            case "PROOFED":
                setSearch(orders.filter(po => po.status === "PROOFED"))
                break;
            case "APPROVED":
                setSearch(orders.filter(po => po.status === "APPROVED"))
                break;
            case "PRINTED":
                setSearch(orders.filter(po => po.status === "PRINTED"))
                break;
            default:
                setSearch(orders)
        }

    }

    return(
        <>
            <div className="bg-black d-grid fw-bold">

                <Link to={"../"}>
                    <i className="fa-solid fa-arrow-left-long text-white  ps-3 pt-2"></i>
                    <button onClick={handleLogin} type="button" className="d-block float-end btn-sm btn-info fw-bold m-2 text-dark">
                        {loggedIn ? username + ' (Log Out)' : 'Log In' }
                    </button>

                </Link>
                <p className="text-center text-light">
                    Comprint Order System
                </p>

            </div>
            <h4 className="alert-info text-dark fw-bold p-2">
                Search Purchase Orders
            </h4>

            <div className="container ps-3 pe-3">
                <p className="form-label mt-4 left">Search by purchase order number, client name, due date, or date received:</p>
                <div className="input-group">
                    <select className="form-select pb-2" id="searchParameters" aria-label="Search by Parameter">
                        <option defaultValue>Select</option>
                        <option value="PONumber">PO Number</option>
                        <option value="ClientName">Client Name</option>
                        <option value="DueDate">Due Date</option>
                        <option value="DateReceived">Date Received</option>
                    </select>
                    <input className="input-group-text col-9 text-start" id="searchTerms" placeholder="Search order system" />
                    <button className="btn btn-info btn-dark fw-bold" type="button">Search</button>
                </div>

                <div className="container mt-4 list-group">
                    <div className="p-1">
                        Find orders by status:
                    </div>
                    <div className="list-group-item-secondary p-1">
                        RECEIVED: PO order has been acknowledged, but art proof has not yet been sent to client.
                    </div>
                    <div className="list-group-item-warning p-1">
                        PROOFED: Art proof has been sent to client, but has not yet been approved.
                    </div>
                    <div className="list-group-item-info p-1">
                        APPROVED: Art proof has been approved by client, but the order has not yet been printed.
                    </div>
                    <div className="list-group-item-dark p-1">
                        PRINTED: Order is complete, ready to be shipped and invoiced.
                    </div>

                </div>

                <div className="input-group mt-4">
                    <select onChange={handleStatus} defaultValue={"ALL"} className="form-select" id="searchParametersAll" aria-label="Search by Status">
                        <option value="ALL">All Orders</option>
                        <option value="RECEIVED">RECEIVED</option>
                        <option value="PROOFED">PROOFED</option>
                        <option value="APPROVED">APPROVED</option>
                        <option value="PRINTED">PRINTED</option>
                    </select>
                </div>
            </div>

            <SearchResultList pos={search}/>
        </>
    )

};

export default Search;