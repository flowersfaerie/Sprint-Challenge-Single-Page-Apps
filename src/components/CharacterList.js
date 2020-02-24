import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import Search from './SearchForm';
import {Container, Row} from 'reactstrap';

const CharacterList = () => {
  // TODO: Add useState to track data from useEffect
  const [cList, setCList] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  
  useEffect(() => {
    const getCharacters = () => {
      axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log('response', response);
        setCList(response.data.results);
        setSearchResults(response.data.results);
      })
      .catch(error => console.log(error));
    }
    getCharacters();
  }, []);
  
  // useEffect(() => effectCallback(), []);    
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    
    if(!searchResults) {
      return <h1>LOADING!</h1>
    }

    console.log('CList', cList);
  return (
    
    <Container>
      <Search searchResults={searchResults} setSearchResults={setSearchResults} cList={cList} />
      <Row>
          <div className="character-list">
            {searchResults.map(character => {
              return <CharacterCard key={character.id} character={character} />;
            })}
          </div>
        </Row>
    </Container>
  );
}

export default CharacterList;