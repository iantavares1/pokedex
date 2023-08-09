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
          color: '#fff',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof PokeCard>

export const Charizard: Story = {
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
