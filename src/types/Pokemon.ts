import { PokemonTypeName } from "./PokemonTypeName"

type Stat = {
  name: string
  url: string
}

type Type = { type: { name: PokemonTypeName } }

type Sprites = {
  front_default: string
  other: { home: { front_default: string } }
}

export interface Pokemon {
  id: number
  name: string
  types: Type[]
  sprites: Sprites
  height: number
  stats: { base_stat: number; effort: number; stat: Stat }[]
  weight: number
  // abilities
  // base_experience
  // cries
  // forms
  // game_indices
  // held_items
  // is_default
  // location_area_encounters
  // moves
  // order
  // past_abilities
  // past_types
  // species
}
