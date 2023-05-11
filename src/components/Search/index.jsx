import React, { useState } from "react";
import { GrSearch } from "react-icons/gr";

import "./styles.css";

export const Search = (prop) => {
  const { onSearch } = prop;
  const [Search, setSearch] = useState("");

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };

  const handleOnClick = () => {
    onSearch(Search);
  };

  return (
    <div className="Search">
      <div className="input-wrapper">
        <input
          type="text"
          onChange={handleOnChange}
          placeholder="Search Pokémon, type, etc"
        />
        <GrSearch onClick={handleOnClick} />
      </div>
    </div>
  );
};
