import PrintLocation from "./print-location";

const PrintLocations = ({locations}) => {
    return(
        <div className="container list-group">
            {locations.map(loc =>
                <PrintLocation location={loc} key={loc.location}/>
            )}


        </div>

    );

}
export default PrintLocations