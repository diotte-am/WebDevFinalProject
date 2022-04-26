
import SearchResult from "./search-result";

const SearchResultList = ({pos}) => {
    return(
        <ul className="container bg-light p-2 mt-4 rounded col-11">
            {
                pos.map(po => {
                    return(<SearchResult result={po} key={po._}/>)

                })
            }
        </ul>
    )

}
export default SearchResultList