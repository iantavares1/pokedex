import { PokemonProps } from "@/types"
import { formatId, formatString } from "@/utils"

export function MainInfo({ pokemon }: { pokemon: PokemonProps }) {
  return (
    <div className="grid w-full items-center gap-2 py-4">
      <h1 className="text-4xl font-semibold">{formatString(pokemon.name)}</h1>
      <h3 className="col-start-2 col-end-3 font-medium">
        {formatId(pokemon.id)}
      </h3>
      <div className="grid gap-2">
        {pokemon.types[0] && (
          <span
            className={`${pokemon.types[0]}-background flex w-fit items-center justify-center rounded-2xl px-5 py-1 text-sm font-medium`}
          >
            {formatString(pokemon.types[0])}
          </span>
        )}

        {pokemon.types[1] && (
          <span
            className={`${pokemon.types[1]}-background flex w-fit items-center justify-center rounded-2xl px-5 py-1 text-sm font-medium`}
          >
            {formatString(pokemon.types[1])}
          </span>
        )}
      </div>
    </div>
  )
}
