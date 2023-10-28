import { Meta, StoryObj } from '@storybook/react'

import { PokemonProps } from '../../types/pokemon/PokemonProps'
import { PokeInfo } from '.'

const meta: Meta<typeof PokeInfo> = {
  component: PokeInfo,
}

export default meta

type Story = StoryObj<typeof PokeInfo>

const pokemonInfo: PokemonProps = {
  name: 'charizard',
  id: 6,
  type: 'fire',
  secondaryType: 'flying',
  imgUrl:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png',
}

const onClose = () => console.log('PokeInfo')

export const Default: Story = {
  render: () => <PokeInfo pokemonInfo={pokemonInfo} onClose={onClose} open />,
}
