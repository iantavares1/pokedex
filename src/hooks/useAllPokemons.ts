import { PokemonWithUrl } from "@/types"
import { isPokemonWithUrl } from "@/utils"
import { useQuery } from "@tanstack/react-query"

export function useUseAllPokemons() {
  const { data } = useQuery({
    queryKey: ["pokemons", "all"],
    queryFn: async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?limit=999",
      )
      const data = await response.json()

      return isPokemonWithUrl(data.results[0])
        ? (data.results as PokemonWithUrl[])
        : null
    },
  })

  const allPokemons = data || []

  return { allPokemons }
}
