import React, { useEffect, useState } from "react";
import axios from "axios";

import "./styles.css";

const typeColors = {
  normal: "#A8A878",
  fire: "#F08030",
  water: "#6890F0",
  electric: "#F8D030",
  grass: "#78C850",
  ice: "#98D8D8",
  fighting: "#C03028",
  poison: "#A040A0",
  ground: "#E0C068",
  flying: "#A890F0",
  psychic: "#F85888",
  bug: "#A8B820",
  rock: "#B8A038",
  ghost: "#705898",
  dragon: "#7038F8",
  dark: "#705848",
  steel: "#B8B8D0",
  fairy: "#EE99AC",
};

export const PokeCard = (props) => {
  console.log(props);
  const [pokeType, setPokeType] = useState("");

  useEffect(() => {
    const info = async () => {
      try {
        const response = await axios.get(props.url);
        setPokeType(response.data.types[0].type.name);
      } catch (error) {
        console.log("erro: ", error);
      }
    };
    info();
  }, []);

  const cardStyle = {
    backgroundColor: typeColors[pokeType],
  };

  return (
    <div className="PokeCard" style={cardStyle}>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${props.id}.png`}
        alt={props.name}
      />
      <h1>{props.name[0].toUpperCase() + props.name.substring(1)}</h1>
      <p>{`#${props.id}`}</p>
      <span>{pokeType[0].toUpperCase() + pokeType.substring(1)}</span>
    </div>
  );
};
