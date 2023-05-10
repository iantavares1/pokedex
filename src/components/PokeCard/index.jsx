import React from "react";
import { RiFireFill } from "react-icons/ri";

import "./styles.css";

export const PokeCard = () => {
  return (
    <div className="PokeCard">
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png"
        alt="seila"
      />
      <p>#004</p>
      <h1>Charmander</h1>
      <span>
        <RiFireFill />
        Fire
      </span>
    </div>
  );
};
