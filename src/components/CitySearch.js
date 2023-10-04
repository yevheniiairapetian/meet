// src/components/CitySearch.js
import { useState, useEffect } from "react";
const CitySearch = ({allLocations, setCurrentCity, setInfoAlert}) => {
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const [query, setQuery] = useState("");
    useEffect(() => {
        setSuggestions(allLocations);
      }, [`${allLocations}`]);
  
    const handleInputChanged = (event) => {
        const value = event.target.value;
        const filteredLocations = allLocations ? allLocations.filter((location) => {
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        }) : [];

        setQuery(value);
        setSuggestions(filteredLocations);

        let infoText;
    if (filteredLocations.length === 0) {
      infoText = "We can not find the city you are looking for. Please try another city"
    } else {
      infoText = ""
    }
    setInfoAlert(infoText);
    
    };

    const handleItemClicked = (event) => {
        const value = event.target.textContent;
        setQuery(value);
        setShowSuggestions(false); // to hide the list
        setCurrentCity(value);
        setInfoAlert(""); //shows no info alert when clicked
      };
    return (
        <div id="city-search">
        <label htmlFor="city-search-input">City Search<br/>
            <input
            id="city-search-input"
                type="text"
                className="city"
                placeholder="Search for a city"
                onFocus={() => setShowSuggestions(true)}
                value={query}
                onChange={handleInputChanged} />
                </label>
            {showSuggestions ? <ul className="suggestions">{suggestions.map((suggestion) => {
                return <li key={suggestion} onClick={handleItemClicked}>{suggestion}</li>
            })}
                <li key='See all cities' onClick={handleItemClicked}>
                    <b>See all cities</b>
                </li>
            </ul> : null}
        </div>
    )

}

export default CitySearch;