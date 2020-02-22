import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import {Container, Row} from 'reactstrap';

const CharacterList = () => {
  // TODO: Add useState to track data from useEffect
  const [cList, setCList] = useState([]);

  const effectCallback = () => {
    axios
      // .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log('response', response);
        setCList(response.data.results);
      })
      .catch(error => console.log(error));
  };

  useEffect(effectCallback, [id]);    
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    
  return (
    <Container>
      <Row>
        <section className="character-list">
          {cList.map(character => (
            <CharacterCard key={CharacterCard.id} character={character} />
          ))}
        </section>
      </Row>
    </Container>
  );
}

export default CharacterList;