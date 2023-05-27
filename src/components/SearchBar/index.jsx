import React, { useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";

import * as S from "./styles.js";

export const SearchBar = ({ onSearch }) => {
  const inputRef = useRef(null);

  const handleSearch = () => {
    const searchValue = inputRef.current.value.toLowerCase();
    onSearch(searchValue);
  };

  const handleClearInput = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  return (
    <S.Container>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search Pokémon"
        onChange={handleSearch}
        onKeyDown={handleClearInput}
      />
      <SearchIcon
        className="search-icon"
        sx={{ fontSize: 40 }}
        onClick={handleClearInput}
      />
    </S.Container>
  );
};
