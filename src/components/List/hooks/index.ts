import { usePokemons, usePokemonsByType, useUseAllPokemons } from "@/hooks"
import { PokemonTypeName } from "@/types"
import { pokemonTypes } from "@/utils"

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

  const { pokemons, pending } = usePokemons(pokemonsWithUrl, 100)

  const skeletons = pending.some((item) => item)
    ? Array.from(
        { length: searchType === "byType" ? 20 : DEFAULT_POKEMON_QUANTITY },
        (_, index) => index,
      )
    : null

  return { pokemons, skeletons }
}
