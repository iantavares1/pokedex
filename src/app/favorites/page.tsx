"use client"

import { Card, Top } from "@/components"
import { useFavorites } from "@/contexts"
import { usePokemons, useUseAllPokemons } from "@/hooks"

export default function Favorites() {
  const { favorites } = useFavorites()

  const { allPokemons } = useUseAllPokemons()

  const pokemonsWithUrl = allPokemons.filter((pokemon) =>
    favorites.includes(pokemon.name),
  )

  const { pokemons } = usePokemons(pokemonsWithUrl)

  return (
    <>
      <Top />
      <div className="mt-8 flex w-full flex-col gap-14">
        {pokemons.map(
          (pokemon) => pokemon && <Card key={pokemon.id} {...pokemon} />,
        )}
      </div>
    </>
  )
}
