import React from "react";
import { useLocation } from "react-router-dom";
import StatusConditional from "./status-conditional";
import pos from "../data/pos.json";
import SearchResult from "./search-result";
import RenderLocationItem from "./render-location-item";


const SearchResultDetail = () => {
    const {state} = useLocation();

    return(
        // add modal here
        <>
            PO number: {state.result.PONumber}
            <br/>
            Status: <StatusConditional result={state.result}/>
            <br/>
            Due Date: {state.result.dueDate}
            <br/>
            Client: {state.result.client}
            <br/>
            Date Added: {state.result.dateAdded}
            <br/>
            Quantity: {state.result.quantity}
            <br/>
            Locations:
            <RenderLocationItem location={state.result.location}/>

        </>
    )

}
export default SearchResultDetail;