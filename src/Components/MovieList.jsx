import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";

import movieList from "./movieList";


const MoviesList = ({ moviesArray }) => {
  return (
    <div className="row mt-2">
      {moviesArray.map((movie, key) => (
        <movieList movie={movie} key={key} />
        
      ))}
      
    </div>
  );
};

MoviesList.propTypes = {
  moviesArray: PropTypes.array.isRequired,
};

export default movieList;