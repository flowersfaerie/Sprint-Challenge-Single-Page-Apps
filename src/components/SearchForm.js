import React, { useState, useEffect } from "react";
// import CharacterList from './CharacterList'

const SearchForm = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(CharacterList);

  useEffect(() => {
    const results = CharacterList.filter(character => {
      return character.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setSearchResults(results);
  }, [searchTerm]);

  const changeHandler = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <section className="search-form">
     {/* // Add a search form here */}
      <div>
        <form>
          <label htmlFor="name">Search</label>
          <input
            id="name"
            type="text"
            name="textfield"
            placeholder="Search"
            value={searchTerm}
            onChange={changeHandler}
          />
        </form>
        <div className="character-list">
          <ul>
            {searchResults.map(character => {
              return <li key={character.id}>{character}</li>;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SearchForm;