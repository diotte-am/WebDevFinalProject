import React from "react";

const PrintLocation = ({location, deleteLocation}) => {
    return (
        <div className="container list-group-item">
            <div className="float-end">
                <button onClick={() => deleteLocation(location)} className="btn btn-sm btn-outline-secondary mt-2">
                    Delete

                </button>
            </div>
            Print Location: {location.location}
          <br/>
            Flashes: {location.flashes}
            <br/> Colors: {location.colors}
        </div>
    )

}
export default PrintLocation;