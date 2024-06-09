import { PokemonTypeName, PokemonWithUrl } from "@/types"
import { isPokemonWithUrl, pokemonTypes } from "@/utils"
import { useQuery } from "@tanstack/react-query"

export function usePokemonsByType(type: PokemonTypeName) {
  const { data } = useQuery({
    queryKey: ["pokemons", type],
    queryFn: async () => {
      if (!pokemonTypes.find((pokemonType) => pokemonType === type)) return null

      const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`)
      const data = await response.json()
      const pokemons = data?.pokemon

      return isPokemonWithUrl(pokemons[0]?.pokemon)
        ? (
            pokemons.map(
              ({ pokemon }: { pokemon: PokemonWithUrl }) => pokemon,
            ) as PokemonWithUrl[]
          ).slice(0, 20)
        : null
    },
  })

  const pokemonsByType = data || []

  return { pokemonsByType }
}
