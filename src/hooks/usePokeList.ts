import { useEffect, useState } from 'react'

import { Pokemon } from '../types/pokemon/Pokemon'

import { usePokemonNames } from './usePokemonNames'
import { useSearchType } from './useSearchType'

import { fetchPokemon } from '../api/fetchPokemon'
import { fetchType } from '../api/fetchType'

const LIMIT_POKEMONS = 150

export function usePokeList(searchValue: string) {
  const pokemonNames = usePokemonNames()
  const searchType = useSearchType(searchValue)

  const [returnedPokemons, setReturnedPokemons] = useState<Pokemon[]>([])

  useEffect(() => {
    if (searchType === 'all') {
      const getPokemons = async () => {
        const response = await fetchPokemon('', LIMIT_POKEMONS)
        const pokemons: [{ name: string }] = response.results
        const promises = pokemons.map(({ name }) => fetchPokemon(name))
        const data = await Promise.all(promises)
        setReturnedPokemons([...data])
      }

      getPokemons()
    } else if (searchType === 'type') {
      const getPokemons = async () => {
        const response = await fetchType(searchValue)
        const pokemons = response.map(
          (pokemon: { pokemon: { name: string } }) => pokemon.pokemon.name,
        )
        const promises = pokemons.map((pokemon: string) =>
          fetchPokemon(pokemon),
        )
        const data = await Promise.all(promises)
        setReturnedPokemons(data)
      }
      getPokemons()
    } else {
      const getPokemons = async () => {
        const searchedNames = pokemonNames.filter((name) =>
          name.includes(searchValue),
        )
        if (searchedNames.length > 0) {
          const promises = searchedNames.map((name) => fetchPokemon(name))
          const pokemons = await Promise.all(promises)
          setReturnedPokemons(pokemons)
        }
      }
      getPokemons()
    }
  }, [searchType, pokemonNames, searchValue])

  return returnedPokemons
}
