import React from "react";

const RenderLocation = ({loc}) => {

    return(
        <>
            {loc.location + ": (" + loc.colors + "C, " + loc.flashes + "F )" }
            <br/>
        </>


        )


}
export default RenderLocation