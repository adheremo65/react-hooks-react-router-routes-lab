import React from "react";
import { movies } from "../data";

function Movies() {
  const [time, title, genres] = movies;
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((item, index) => {
        return(
        <div key={index}>
          {item.title} {item.time}
          {item.genres.map((list, index) => {
            return (
              <ul key={index}>
                <li>{list}</li>
              </ul>
            );
          })}
        </div>);
      })}
    </div>
  );
}

export default Movies;
