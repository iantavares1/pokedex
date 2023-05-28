import React, { useEffect, useState } from "react";

import * as A from "./App.styles";

import HomeIcon from "@mui/icons-material/Home";
import GitHubIcon from "@mui/icons-material/GitHub";

import { Slider } from "./components/Slider";
import { SearchBar } from "./components/SearchBar";

import { HomeList } from "./components/PokeLists/HomeList";
import { SearchList } from "./components/PokeLists/SearchList";
import { TypeList } from "./components/PokeLists/TypeList";

function App() {
  const [isHome, setIsHome] = useState(true);
  const [searchData, setSearchData] = useState("");
  const [typeData, setTypeData] = useState("");

  const handleHomeList = (bool = true) => {
    setIsHome(bool);
    if ((bool = true)) {
      setSearchData("");
      setTypeData("");
    }
  };

  const handleSearchList = (value) => {
    setSearchData(value);
    if (value !== "") {
      setIsHome(false);
      setTypeData("");
    }
  };

  const handleTypeList = (value) => {
    setTypeData(value);
    if (value !== "") {
      setIsHome(false);
      setSearchData("");
    }
  };

  return (
    <A.Container>
      <header>
        <A.Wrapper>
          <a href="https://github.com/iantavares1/pokedex">
            <GitHubIcon />
          </a>
          <HomeIcon onClick={handleHomeList} />
        </A.Wrapper>

        <Slider onChoice={handleTypeList} />
        <SearchBar onSearch={handleSearchList} />
      </header>
      <main>
        {isHome && <HomeList />}
        {searchData !== "" && <SearchList searchData={searchData} />}
        {typeData !== "" && <TypeList typeData={typeData} />}
      </main>
    </A.Container>
  );
}

export default App;
