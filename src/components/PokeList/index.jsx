import React from "react";

import { PokeCard } from "../PokeCard";

import "./styles.css";

export const PokeList = (props) => {
  console.log(props.pokeData);

  return (
    <div className="PokeList">
      {props.pokeData.map((pokemon, index) => (
        <PokeCard
          key={index + 1}
          id={index + 1}
          name={pokemon.name}
          url={pokemon.url}
        />
      ))}
    </div>
  );
};
