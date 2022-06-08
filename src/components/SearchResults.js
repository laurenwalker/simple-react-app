import SearchResult from "./SearchResult";

function SearchResults(props){



    return (
        <>
        {props.results.map((result)=>(
            <SearchResult data={result} key={result.id} />
        )
        )}
        </>
    )
}

export default SearchResults;