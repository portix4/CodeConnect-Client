import './SearchResultsClassesList.css'
import { Link } from "react-router-dom"

const SearchResultsClassesList = ({ results }) => {

    return (
        <>
            {
                results.map((e, i) => {
                    return (
                        <>
                            <div key={e} className="SearchResultsClassesList">
                                <Link className='searchResultsLink' to={`/clases?language=${e}`}><div>{e}</div></Link>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}

export default SearchResultsClassesList