import React, { useState, useEffect } from "react";
import CharacterList from './CharacterList';
// import CharacterCard from './CharacterCard';
// import {Row} from 'reactstrap';

const SearchForm = (props) => {
console.log('Props', props)
  const [searchTerm, setSearchTerm] = useState();
  
  useEffect(() => {
  const results = props.cList.filter(character => 
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

    props.setSearchResults(results);
    console.log('Search Results', props.searchResults)
  }, [searchTerm]);
 
  const changeHandler = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <section className="search-form">
     {/* // Add a search form here */}
      <div>
        <form>
          <label htmlFor="name">Search Characters</label>
          <input
            id="name"
            type="text"
            name="textfield"
            placeholder="Search"
            value={searchTerm}
            onChange={changeHandler}
          />
        </form>
        
      </div>
    </section>
  );
}

export default SearchForm;