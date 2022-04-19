import PrintLocation from "./print-location";
import React from "react";

const PrintLocations = ({locations, deleteLocation}) => {
    return(
        <div className="container list-group">
            {locations.map(loc =>
                <PrintLocation location={loc} deleteLocation={deleteLocation} key={loc.location}/>
            )}


        </div>

    );

}
export default PrintLocations