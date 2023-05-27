import React, { useEffect, useState } from "react";
import { fetchPokemon } from "../../api/fetchPokemon";
import { PokeCard } from "../PokeCard";

import * as S from "../PokeList/styles";

export const SearchedPokeList = ({ searchValue }) => {
  const [names, setNames] = useState([]);
  const [pokeInfo, setPokeInfo] = useState(null);

  const limit = 900;

  useEffect(() => {
    const getNames = async () => {
      try {
        const response = await fetchPokemon("", limit);
        const data = response.results;
        const arr = data.map((pokemon) => pokemon.name);
        setNames(arr);
      } catch (error) {
        console.log("Erro ao buscar os dados:", error);
      }
    };
    getNames();
  }, []);

  useEffect(() => {
    const getPokemonById = async () => {
      if (!isNaN(searchValue)) {
        try {
          const response = await fetchPokemon(searchValue);
          const data = response;
          setPokeInfo([data]);
        } catch (error) {
          console.log("Erro ao buscar os dados:", error);
        }
      }
    };

    getPokemonById();
  }, [searchValue]);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        if (!isNaN(searchValue)) {
          return;
        }
        const matchingPokemons = names.filter((name) =>
          name.toLowerCase().startsWith(searchValue.toLowerCase())
        );
        const promises = matchingPokemons.map((name) => fetchPokemon(name));
        const responses = await Promise.all(promises);
        const data = responses.map((response) => response);
        setPokeInfo(data);

        data.sort((a, b) => {
          const aIndex = a.name
            .toLowerCase()
            .indexOf(searchValue.toLowerCase());
          const bIndex = b.name
            .toLowerCase()
            .indexOf(searchValue.toLowerCase());

          if (aIndex === bIndex) {
            return a.name.localeCompare(b.name);
          } else {
            return aIndex - bIndex;
          }
        });

        setPokeInfo(data);
      } catch (error) {
        console.log("Erro ao buscar os dados:", error);
      }
    };

    getPokemons();
  }, [names, searchValue]);

  if (!pokeInfo) {
    return (
      <div>
        <h2>Pokémon Not Found</h2>
      </div>
    );
  }

  return (
    <S.Container>
      {pokeInfo.map((pokemon) => (
        <PokeCard
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.species.name}
          type={pokemon.types[0].type.name}
        />
      ))}
    </S.Container>
  );
};
