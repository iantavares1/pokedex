"use client"

import { Card, Top } from "@/components"
import { useFavorites } from "./hooks/useFavorites"

export default function Favorites() {
  const { pokemons } = useFavorites()
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
