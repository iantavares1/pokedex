import React, { useEffect, useState } from "react";

import * as S from "../styles";

import { fetchPokemon } from "../../../api/fetchPokemon";
import { PokeCard } from "../../PokeCard";

export const SearchList = ({ searchData }) => {
  const [pokeNames, setpokeNames] = useState([]);
  const [pokeInfo, setPokeInfo] = useState(null);

  const limit = 900;

  useEffect(() => {
    const getpokeNames = async () => {
      try {
        const response = await fetchPokemon("", limit);
        const data = response.results;
        const arr = data.map((pokemon) => pokemon.name);
        setpokeNames(arr);
      } catch (error) {
        console.log("Erro ao buscar os dados:", error);
      }
    };
    getpokeNames();
  }, []);

  useEffect(() => {
    const getPokemonById = async () => {
      if (!isNaN(searchData)) {
        try {
          const response = await fetchPokemon(searchData);
          const data = response;
          setPokeInfo([data]);
        } catch (error) {
          console.log("Erro ao buscar os dados:", error);
        }
      }
    };

    getPokemonById();
  }, [searchData]);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        if (!isNaN(searchData)) {
          return;
        }
        const matchingPokemons = pokeNames.filter((name) =>
          name.toLowerCase().startsWith(searchData.toLowerCase())
        );
        const promises = matchingPokemons.map((name) => fetchPokemon(name));
        const responses = await Promise.all(promises);
        const data = responses.map((response) => response);
        setPokeInfo(data);

        data.sort((a, b) => {
          const aIndex = a.name.toLowerCase().indexOf(searchData.toLowerCase());
          const bIndex = b.name.toLowerCase().indexOf(searchData.toLowerCase());

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
  }, [pokeNames, searchData]);

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
