import { Pokemon } from '../../../types/pokemon/Pokemon'

import { usePokemonNames } from './usePokemonNames'
import { useSearchType } from './useSearchType'

import { fetchPokemon } from '../../../services/api/fetchPokemon'
import { fetchType } from '../../../services/api/fetchType'
import { useQuery } from '@tanstack/react-query'

export function usePokeList(searchValue: string) {
  const pokemonNames = usePokemonNames()
  const searchType = useSearchType(searchValue)

  const fetchAllPokemons = async () => {
    const response = await fetchPokemon('', 150)
    const pokemons: [{ name: string }] = response.results
    const promises = pokemons.map(({ name }) => fetchPokemon(name))
    return Promise.all(promises)
  }

  const fetchPokemonByType = async () => {
    const response = await fetchType(searchValue)
    const pokemons = response?.map(
      (pokemon: { pokemon: { name: string } }) => pokemon.pokemon.name,
    )
    const promises = pokemons?.map((pokemon: string) => fetchPokemon(pokemon))
    return await Promise.all(promises)
  }

  const fetchPokemonByName = async () => {
    const searchedNames = pokemonNames.filter((name) =>
      name.includes(searchValue),
    )
    if (searchedNames.length > 0) {
      const promises = searchedNames.map((name) => fetchPokemon(name))
      return Promise.all(promises)
    }
    return []
  }

  const { data: returnedPokemons = [], isLoading } = useQuery<Pokemon[]>(
    ['pokemons', searchType, searchValue],
    () => {
      if (searchType === 'all') {
        return fetchAllPokemons()
      }
      if (searchType === 'type') {
        return fetchPokemonByType()
      } else {
        return fetchPokemonByName()
      }
    },
  )

  return { pokemons: returnedPokemons, isLoading }
}
