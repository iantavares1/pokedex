import { Meta, StoryObj } from '@storybook/react'

import { PokeCard } from '.'

const meta: Meta<typeof PokeCard> = {
  component: PokeCard,
  decorators: [
    (Story) => (
      <div
        style={{
          fontFamily: 'sans-serif',
          width: '13.5rem',
          marginTop: '2rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof PokeCard>

export const Example1: Story = {
  render: () => (
    <PokeCard
      name="pikachu"
      id={25}
      type="electric"
      imgUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png"
    />
  ),
}

export const Example2: Story = {
  render: () => (
    <PokeCard
      name="bulbasaur"
      id={1}
      type="grass"
      secondaryType="poison"
      imgUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
    />
  ),
}

export const Example3: Story = {
  render: () => (
    <PokeCard
      name="charizard"
      id={6}
      type="fire"
      secondaryType="flying"
      imgUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png"
    />
  ),
}
