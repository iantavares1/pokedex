import React, { useEffect, useState } from "react";
import { fetchPokemon } from "../../api/fetchPokemon";
import { PokeCard } from "../PokeCard";

import "./styles.css";

export const PokeSearch = ({ searchValue }) => {
  const [pokeInfo, setPokeInfo] = useState(null);

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const response = await fetchPokemon(searchValue);
        const data = response;
        setPokeInfo(data);
      } catch (error) {
        console.log("Erro ao buscar os dados:", error);
      }
    };
    getPokemon();
  }, [searchValue]);

  if (!pokeInfo) {
    return (
      <div>
        <h2>Pokémon Not Found</h2>
      </div>
    );
  }

  return (
    <div className="PokeSearch">
      <PokeCard
        key={pokeInfo.id}
        id={pokeInfo.id}
        name={pokeInfo.name}
        type={pokeInfo.types[0].type.name}
      />
    </div>
  );
};
