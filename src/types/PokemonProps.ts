import { Pokemon, PokemonTypeName } from "@/types"

export type PokemonProps = Pick<Pokemon, "id" | "name"> & {
  id: Pokemon["id"]
  name: Pokemon["name"]
  types: (PokemonTypeName | undefined)[]
  imgPaths: (string | undefined)[]
}
