"use client"

import { Card } from "@/components"
import { useList } from "./useList"

export function List({ search }: { search: string }) {
  const { pokemons, skeletons } = useList(search)

  if (skeletons)
    return skeletons.map((skeleton) => (
      <div
        key={`skeleton-card-${skeleton}`}
        className="h-36 w-full animate-pulse rounded-2xl bg-zinc-600"
      />
    ))

  if (pokemons.length <= 0) return <h1>Pokemon Not Found!</h1>

  return (
    pokemons && (
      <div className="flex w-full flex-col gap-14">
        {pokemons?.map(
          (pokemon) => pokemon && <Card key={pokemon.id} {...pokemon} />,
        )}
      </div>
    )
  )
}
