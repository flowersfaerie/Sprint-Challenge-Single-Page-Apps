import React, { useState, useEffect } from "react";

export default function SearchForm() {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState("characters");

  useEffect(() => {
    const results = characters.filter(character => {
      return character.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setSearchResults(results);
  }, [searchTerm]);

  const changeHandler = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <section className="search-form">
     // Add a search form here
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
      </div>
    </section>
  );
}
