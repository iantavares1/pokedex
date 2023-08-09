import { Meta, StoryObj } from '@storybook/react'

import { PokeCardProps } from '..'
import { PokeInfo } from '.'

const meta: Meta<typeof PokeInfo> = {
  component: PokeInfo,
}

export default meta

type Story = StoryObj<typeof PokeInfo>

const pokemonInfo: PokeCardProps = {
  name: 'charizard',
  id: 6,
  type: 'fire',
  secondaryType: 'flying',
  imgUrl:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png',
}

const onOpen = () => console.log('PokeInfo')

export const Default: Story = {
  render: () => <PokeInfo pokemonInfo={pokemonInfo} onOpen={onOpen} />,
}
