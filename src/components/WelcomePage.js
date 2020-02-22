import React from "react";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
      <div>
        <p>After having been missing for nearly 20 years, Rick Sanchez suddenly arrives at daughter Beth's doorstep to move in with her and her family. Although Beth welcomes Rick into her home, her husband, Jerry, isn't as happy about the family reunion. Jerry is concerned about Rick, a sociopathic scientist, using the garage as his personal laboratory. In the lab, Rick works on a number of sci-fi gadgets, some of which could be considered dangerous. But that's not all Rick does that concerns Jerry. He also goes on adventures across the universe that often involve his grandchildren, Morty and Summer.</p>
        <ul>
          <li>First episode date: December 2, 2013</li>
          <li>Program creators: Justin Roiland, Dan Harmon</li>
          <li>Writers: Ryan Ridley, Dan Guterman, Jessica Gao</li>
          <li>Networks: Adult Swim, Cartoon Network</li>
        </ul>
      </div>
    </section>
  );
}
