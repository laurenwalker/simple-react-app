import { useState } from "react";

function SearchBox(props){

    const [searchText, setSearch] = useState("");
    const [finalSearchText, setFinalSearch] = useState("");

    //Submits the search
    const onSubmit=(e)=>{
        e.preventDefault();
        
        setFinalSearch(searchText);
        props.afterSubmit(searchText);
    }
    

    return (
        <form onSubmit={onSubmit}>
        <input onChange={(e)=>{ setSearch(e.target.value) }} value={searchText}  type="text" id="search-input" placeholder="Search for something on the map" 
                style={{ height: "1.5em", width: "80%" }} />
        <p>Current Search: {finalSearchText||"(none yet)"}</p>
        </form>
    )

}

export default SearchBox;