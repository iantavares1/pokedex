import React, { useEffect, useState } from "react";
import { fetchPokemon } from "../../api/fetchPokemon";
import { PokeCard } from "../PokeCard";

import "./styles.css";

export const PokeList = () => {
  const [pokeUrls, setPokeUrls] = useState([]);
  const [pokeInfo, setPokeInfo] = useState([]);

  const limit = 150;

  useEffect(() => {
    const getUrls = async () => {
      try {
        const response = await fetchPokemon("", limit);
        const urls = response.results.map((pokemon) => pokemon.url);
        setPokeUrls(urls);
      } catch (error) {
        console.log("Erro ao buscar os dados:", error);
      }
    };

    getUrls();
  }, []);

  useEffect(() => {
    const fetchPokeInfo = async () => {
      try {
        const promises = pokeUrls.map((url) =>
          fetch(url).then((response) => response.json())
        );

        const pokemons = await Promise.all(promises);
        setPokeInfo(pokemons);
      } catch (error) {
        console.log("Erro:", error);
      }
    };

    if (pokeUrls.length > 0) {
      fetchPokeInfo();
    }
  }, [pokeUrls]);

  return (
    <div className="PokeList">
      {pokeInfo.map((pokemon) => (
        <PokeCard
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.species.name}
          type={pokemon.types[0].type.name}
        />
      ))}
    </div>
  );
};
