import React from "react";
import {useNavigate} from "react-router-dom";
import StatusConditional from "./status-conditional";

const SearchResult = ({result}) => {
    const navigate = useNavigate()
    const handleClick = () => {
        const searchString = result._id;
        navigate(`/search/detail/${searchString}`, {state: {result}})
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
                    Locations:
                    <div className="container">

                        {result.location.map((loc) => {
                            loc.key = loc.location
                            return(
                                <div key={loc.location}>
                                    {loc.location + ": (" + loc.colors + "C, " + loc.flashes + "F )" }
                                    <br/>
                                </div>
                            )})}
                    </div>


                </div>


            </div>






        </>

    )
}
export default SearchResult;