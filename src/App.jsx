import React, { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { PokeList } from "./components/PokeList";
import { PokeSearch } from "./components/PokeSearch";

function App() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      {searchValue === "" && <PokeList />}
      {searchValue !== "" && <PokeSearch searchValue={searchValue} />}
    </div>
  );
}

export default App;
