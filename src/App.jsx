import React, { useEffect, useState } from "react";
// import { PokeList } from "./components/PokeCard";
import { Search } from "./components/Search";
import { searchPokemon } from "./api/searchPokemon";

function App() {
  const handleOnSearch = async (pokemon) => {
    const result = await searchPokemon(pokemon);
    console.log("pokemon: ", result.name);
  };

  const [pokeData, setPokeData] = useState({});

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        let url = "https://pokeapi.co/api/v2/pokemon";
        const response = await fetch(url);
        const data = await response.json();
        setPokeData(data.results);
      } catch (error) {
        console.log("erro: ", error);
      }
    };

    setTimeout(() => {
      console.log(pokeData);
    }, 2000);

    fetchPokemon();
  }, []);

  return (
    <div className="App">
      <Search onSearch={handleOnSearch} />
      <div className="container">{/* <PokeList pokeData={pokeData} /> */}</div>
    </div>
  );
}

export default App;
