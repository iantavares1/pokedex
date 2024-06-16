import { Card } from "@/components"
import { DetailedHTMLProps, HTMLAttributes } from "react"
import { useList } from "./hooks"

export function List({ search }: { search: string }) {
  const { pokemons, skeletons } = useList(search)

  if (skeletons)
    return (
      <ListWrapper>
        {skeletons?.map((skeleton) => (
          <div
            key={`skeleton-card-${skeleton}`}
            className="h-36 w-full animate-pulse rounded-2xl bg-zinc-600"
          />
        ))}
      </ListWrapper>
    )

  if (!skeletons && pokemons.length <= 0) return <h1>Pokemon Not Found!</h1>

  return (
    <ListWrapper>
      {pokemons?.map(
        (pokemon) => pokemon && <Card key={pokemon.id} {...pokemon} />,
      )}
    </ListWrapper>
  )
}

function ListWrapper(
  props?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
) {
  return (
    <div
      className="flex w-full flex-col gap-14 sm:grid sm:grid-cols-[repeat(auto-fill,minmax(13.5rem,1fr))]"
      {...props}
    />
  )
}
