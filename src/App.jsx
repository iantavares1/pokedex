import React from "react";
import { PokeCard } from "./components/PokeCard";
import { Search } from "./components/Search";

function App() {
  return (
    <div className="App">
      <Search />
      <div className="container">
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
      </div>
    </div>
  );
}

export default App;
