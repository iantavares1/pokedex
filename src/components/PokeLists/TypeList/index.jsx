import React, { useState, useEffect } from "react";

import { fetchType } from "../../../api/fetchType";
import { PokeCard } from "../../PokeCard";

import * as S from "../styles";

export const TypeList = ({ typeData }) => {
  const [pokeUrls, setPokeUrls] = useState([]);
  const [pokeInfo, setPokeInfo] = useState([]);

  useEffect(() => {
    const getUrls = async () => {
      try {
        const response = await fetchType(typeData);
        const urls = response.pokemon.map((obj) => obj.pokemon.url);
        const limiteUrls = urls.slice(0, 50);
        setPokeUrls(limiteUrls);
      } catch (error) {
        console.log("Erro ao buscar os dados:", error);
      }
    };
    getUrls();
  }, [typeData]);

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
