import pos from "../data/pos.json"
import SearchResult from "./search-result";

const SearchResultList = () => {
    return(
        <ul className="container bg-light p-2 mt-4 rounded col-11">
            {
                pos.map(po => {
                    return(<SearchResult result={po} key={po.PONumber}/>)

                })
            }
        </ul>
    )

}
export default SearchResultList