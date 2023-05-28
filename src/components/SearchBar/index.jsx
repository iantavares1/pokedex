import React, { useRef } from "react";

import * as S from "./styles.js";
import SearchIcon from "@mui/icons-material/Search";

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
      <S.Input
        ref={inputRef}
        type="text"
        placeholder="Search Pokémon"
        onChange={handleSearch}
        onKeyDown={handleClearInput}
      />
      <SearchIcon className="search-icon" onClick={handleClearInput} />
    </S.Container>
  );
};
