import React, { useState } from "react";
import Movies from "./Components/Movies";
import { moviesList } from "./Components/dummyData";
import Rating from "./Components/Rating";

import "./App.css"
function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <header>
        <h1 className="vs">Visual Studios</h1>

        <Rating />

        <input
          className="searchbar"
          type="search"
          placeholder="search..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </header>
      <div className="movie-container">
        {moviesList
          .filter((moviesList) =>  {
            if (searchTerm === "") {
              return moviesList;
            } else if (
              moviesList.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return moviesList;
            }
          })
          .map((moviesList, key) => (
            <Movies {...moviesList} key={key} />
          ))}
      </div>
    </>
  );
}

export default App;