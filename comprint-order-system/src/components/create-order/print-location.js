import React from "react";

const PrintLocation = ({location}) => {
    return (
        <div className="list-group-item">
            <div className="float-end">
                <button onClick={() => {alert("delete " + location.location)}} className="btn btn-sm btn-outline-secondary mt-2">
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