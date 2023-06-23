import React from "react";
import { actors } from "../data";

function Actors() {
  const [name, movies] = actors;
  return (
    <div>
      <h1> Actors Page</h1>
      {actors.map((item, index) => {
        return (
          <div key={index}>
            {item.name}
            {item.movies.map((element, index) => {
              return (
                <ul key={index}>
                  <li>{element}</li>
                </ul>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Actors;
