import React from "react";
import { directors } from "../data";

function Directors() {
  const [name, movies] = directors;
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((item, index) => {
        return (
          <div key={index}>
            {item.name}
            {item.movies.map((each, index) => {
              return (
                <ul key={index}>
                  <li>{each}</li>
                </ul>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Directors;
