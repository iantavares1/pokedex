import React, { useState, useEffect } from "react";
import { fetchPokemon } from "../../api/fetchPokemon";
import { PokeCard } from "../PokeCard";

import "./styles.css";

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [pokeInfo, setPokeInfo] = useState("");
  const [pokemon, setPokemon] = useState("seila");

  const handleOnSearch = (e) => {
    if (e.key === "Enter") {
      setSearchValue(e.target.value);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchPokemon(searchValue);
        setPokeInfo(response);
      } catch (error) {
        console.log("Erro ao buscar os dados:", error);
      }
    };

    fetchData();
  }, [searchValue]);

  useEffect(() => {
    setPokemon(
      <PokeCard
        key={pokeInfo.id}
        id={pokeInfo.id}
        name={pokeInfo.species.name}
        type={pokeInfo.types[0].type.name}
      />
    );
  }, [pokeInfo]);

  return (
    <>
      <input
        className="SearchBar"
        type="text"
        placeholder="Search Pokémon"
        onKeyDown={handleOnSearch}
      />
      <div>{pokemon}</div>
    </>
  );
};
