import React from "react";
import {useNavigate} from "react-router-dom";
import StatusConditional from "./status-conditional";

const SearchResult = ({result}) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/search/detail", {state: {result}})
    }
    return(
        <>
            <div className="d-flex">
                <div className=" p-2 pe-3">
                    <button onClick={handleClick} type="button" className="btn btn-info btn-sm fw-bold ">View Details
                    </button>
                </div>

                <div className=" pt-2 pb-2">
                    PO Number: {result.PONumber}
                    <br/>
                    Status: <StatusConditional result={result}/>
                    <br/>
                    Due Date: {result.dueDate}
                    <br/>
                    Locations: {result.location.fullFront ? "full front, " : ""}
                    {result.location.rightSleeve ? "right sleeve, " : ""}
                    {result.location.leftSleeve ? "left sleeve, " : ""}
                    {result.location.backYoke ? "back yoke, " : ""}
                    {result.location.fullBack ? "full back, " : ""}
                    {result.location.leftChest ? "left chest, " : ""}
                    {result.location.rightChest ? "right chest, " : ""}
                    {result.location.lowBack ? "low back, " : ""}
                    {result.location.lowFront ? "low front, " : ""}
                    {result.location.other ? "custom location, " : ""}
                    <div className="pt-2">
                        <hr />
                    </div>
                </div>


            </div>






        </>

    )
}
export default SearchResult;