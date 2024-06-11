import { Pokemon, PokemonProps, PokemonWithUrl } from "@/types"
import { isPokemon } from "@/utils"
import { useQueries } from "@tanstack/react-query"

export function usePokemons(pokemonsWithUrl: PokemonWithUrl[], limit?: number) {
  const { data, pending: pending } = useQueries({
    queries: pokemonsWithUrl.slice(0, limit).map(({ url }) => ({
      queryKey: ["pokemons", url],
      queryFn: async () => {
        const response = await fetch(url)
        const data = await response.json()
        return data
      },
    })),
    combine: (results) => {
      return {
        data: results
          .map(({ data }) => (isPokemon(data) ? (data as Pokemon) : null))
          .map(
            (pokemon) =>
              pokemon &&
              ({
                id: pokemon.id,
                name: pokemon.name,
                types: [
                  pokemon.types[0]?.type.name,
                  pokemon.types[1]?.type.name,
                ],
                imgPaths: [
                  pokemon.sprites?.other?.home?.front_default,
                  pokemon.sprites.front_default,
                ],
              } satisfies PokemonProps as PokemonProps),
          ),
        pending: results.map(({ isPending }) => isPending),
      }
    },
  })

  const pokemons = data || []

  return { pokemons, pending }
}
