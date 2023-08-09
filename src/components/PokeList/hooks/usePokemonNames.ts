import { useEffect, useState } from 'react'

import { fetchPokemon } from '../../../services/api/fetchPokemon'

export function usePokemonNames() {
  const [pokemonNames, setPokemonNames] = useState<string[]>([])

  useEffect(() => {
    const getPokemonNames = async () => {
      const response = await fetchPokemon('', 999)
      const names = response.results.map(
        (pokemon: { name: string; url: string }) => pokemon.name,
      )
      setPokemonNames(names)
    }

    getPokemonNames()
  }, [])

  return pokemonNames
}
