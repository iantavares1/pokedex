import React, { useEffect, useState } from "react";
import axios from "axios";

import { PokeList } from "./components/PokeList";
import { Search } from "./components/Search";
import { searchPokemon } from "./api/searchPokemon";

export default function App() {
  const handleOnSearch = async (pokemon) => {
    const result = await searchPokemon(pokemon);
    console.log("pokemon: ", result);
  };

  const [pokeData, setPokeData] = useState({});

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        let url = "https://pokeapi.co/api/v2/pokemon/?limit=99";
        const response = await axios.get(url);
        const data = response.data;
        setPokeData(data.results);
      } catch (error) {
        console.log("erro: ", error);
      }
    };

    fetchPokemon();
  }, []);

  return (
    <div className="App">
      <Search onSearch={handleOnSearch} />
      <PokeList pokeData={pokeData} />
    </div>
  );
}
