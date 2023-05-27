import React, { useState } from "react";

import { SearchBar } from "./components/SearchBar";
import { PokeList } from "./components/PokeList";
import { SearchedPokeList } from "./components/SearchedPokeList";

function App() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value) => setSearchValue(value);
  return (
    <div className="App">
      <header>
        <SearchBar onSearch={handleSearch} />
      </header>
      <main>
        {searchValue === "" && <PokeList />}
        {searchValue !== "" && <SearchedPokeList searchValue={searchValue} />}
      </main>
    </div>
  );
}

export default App;
