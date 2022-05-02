import React from "react";

const RenderLocationItem = (po) => {
    return (
        <div className="container">

            {po.location.location.map((loc) => {
                loc.key = loc.location
                return(
                    <div key={loc.location}>
                        {loc.location + ": (" + loc.colors + "C, " + loc.flashes + "F )" }
                        <br/>
                    </div>
                )})}
        </div>
    )

}

export default RenderLocationItem;