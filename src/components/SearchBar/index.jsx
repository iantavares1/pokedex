import React, { useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";

import "./styles.css";

export const SearchBar = ({ onSearch }) => {
  const inputRef = useRef(null);

  const handleSearch = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      const searchValue = inputRef.current.value;
      onSearch(searchValue);
      inputRef.current.value = "";
    }
  };

  return (
    <div className="SearchBar">
      <div className="container">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search Pokémon"
          onKeyDown={handleSearch}
        />
        <SearchIcon
          className="search-icon"
          sx={{ fontSize: 40 }}
          onClick={handleSearch}
        />
      </div>
    </div>
  );
};
