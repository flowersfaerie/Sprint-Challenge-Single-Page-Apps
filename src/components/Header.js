import React from "react";
import { Route, Link } from 'react-router-dom';
import Welcome from './WelcomePage';
import CharacterList from './CharacterList';

export default function Header() {
  return (
    <header className="ui centered">
      <nav>
        <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
        <div>
          <Link to="/">Welcome</Link>
          <Link to="/characters">Characters</Link>
        </div>
      </nav>
      <Route exact path="/" component={Welcome} />
      <Route path="/characters" component={CharacterList} />
    </header>
  );
}
