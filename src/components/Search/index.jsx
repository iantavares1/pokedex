import React from "react";
import { GrSearch } from "react-icons/gr";

import "./styles.css";

export const Search = () => {
  return (
    <div className="Search">
      <div className="input-wrapper">
        <input type="text" placeholder="Search Pokémon, type, etc" />
        <GrSearch />
      </div>
    </div>
  );
};
