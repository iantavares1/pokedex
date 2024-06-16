import { useFavoritesContext } from "@/contexts"
import { usePokemons, useUseAllPokemons } from "@/hooks"

export function useFavorites() {
  const { favorites } = useFavoritesContext()
  const { allPokemons } = useUseAllPokemons()

  const pokemonsWithUrl = allPokemons.filter((pokemon) =>
    favorites.includes(pokemon.name),
  )
  const { pokemons } = usePokemons(pokemonsWithUrl)

  return { pokemons }
}
