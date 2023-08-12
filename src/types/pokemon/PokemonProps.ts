import PokemonType from './PokemonType'

export type PokemonProps = {
  id: number
  name: string
  type: PokemonType
  secondaryType?: PokemonType
  imgUrl: string
  secondaryImgUrl?: string
}
