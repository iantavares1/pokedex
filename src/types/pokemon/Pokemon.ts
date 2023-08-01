import PokemonType from './PokemonType'

type Type = { type: { name: PokemonType } }

export type Pokemon = {
  id: number
  name: string
  types: Type[]
  sprites: { front_default: string; other: { home: { front_default: string } } }
}
