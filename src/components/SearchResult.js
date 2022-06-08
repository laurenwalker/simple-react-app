function SearchResult(props){
    return (
        <div style={{ display: "grid", gridTemplateColumns: "30% 70%", marginBottom: "10px", paddingLeft: "10px" }}>
        <img src={props.data.imageUrl} alt="{props.name} restaurant."/>
        <div>
            <p style={{ fontWeight: "bold" }}>{props.data.name}</p>
            <p>{props.data.address}</p>
        </div>
        </div>
    )

}

SearchResult.defaultProps = {
    title: "A search result"
}

export default SearchResult;