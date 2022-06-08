import {useState} from "react";
import SearchBox from "./SearchBox";
import SearchResults from "./SearchResults";
import Map from "./Map";

function Search(){

    const [results, setResults] = useState([]);


    //Sends search - just a fake json API
    const fetchResults= async (searchText)=>{
        let response = await fetch("http://localhost:3000/data/mapdata.json?search="+searchText);
        if(response.ok){
            let json = await response.json();
            setResults(json)
        }
    }

    return(
        <section id="search" style={{ display: "grid", gridTemplateColumns: "50% 50%"}}>
            <div>
                <p>Search</p>
                <SearchBox afterSubmit={fetchResults} />
                <SearchResults results={results} />
            </div>
            <Map style={{ backgroundColor: "#CCCCCC" }}/>
        </section>
    )
}

export default Search;