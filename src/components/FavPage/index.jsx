import { useState, useEffect } from 'react'

import * as S from './styles'

import { PokeCard } from '../PokeCard'
import { NoFavorites } from '../common/NoFavorites'
import { fetchPokemon } from '../../api/fetchPokemon'
import { Divider } from '../common/Divider'

export const FavPage = ({ favorites }) => {
  const [pokeData, setPokeData] = useState([])

  useEffect(() => {
    if (favorites.length) {
      const getPokeData = async () => {
        const response = favorites.map((name) => fetchPokemon(name))
        const pokemons = await Promise.all(response)
        setPokeData(pokemons)
      }

      getPokeData()
    } else {
      setPokeData(null)
    }
  }, [favorites])

  return (
    <>
      <Divider />
      <S.Container>
        {pokeData ? (
          pokeData.map((pokemon) => (
            <PokeCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.species.name}
              type={pokemon.types[0].type.name}
              type2={pokemon.types[1] ? pokemon.types[1].type.name : null}
              imgUrl={pokemon.sprites.other.home.front_default}
              imgUrl2={pokemon.sprites.front_default}
            />
          ))
        ) : (
          <NoFavorites />
        )}
      </S.Container>
    </>
  )
}
