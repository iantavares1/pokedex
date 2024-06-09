import { usePokemonsByType, useUseAllPokemons } from "@/hooks"
import { Pokemon, PokemonProps, PokemonTypeName } from "@/types"
import { isPokemon, pokemonTypes } from "@/utils"
import { useQueries } from "@tanstack/react-query"

const DEFAULT_POKEMON_QUANTITY = 150

export function useList(search: string) {
  const searchType =
    search === ""
      ? "all"
      : pokemonTypes.find((type) => type === search)
        ? "byType"
        : "byName"

  const { allPokemons } = useUseAllPokemons()
  const { pokemonsByType } = usePokemonsByType(search as PokemonTypeName)

  const pokemonsWithUrl =
    searchType === "all"
      ? allPokemons
      : searchType === "byType"
        ? pokemonsByType
        : allPokemons.filter(
            ({ name }) => name === search || name.includes(search),
          )

  const { data: pokemons, pending: pending } = useQueries({
    queries: pokemonsWithUrl.slice(0, 100).map(({ url }) => ({
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
              } satisfies PokemonProps),
          ),
        pending: results.map(({ isPending }) => isPending),
      }
    },
  })

  const skeletons = pending.some((item) => item)
    ? Array.from({ length: DEFAULT_POKEMON_QUANTITY }, (_, index) => index)
    : null

  return { pokemons, skeletons }
}
