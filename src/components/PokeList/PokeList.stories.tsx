import { Meta, StoryObj } from '@storybook/react'

import { PokeList } from '.'

const meta: Meta<typeof PokeList> = {
  component: PokeList,
  decorators: [
    (Story) => (
      <div
        style={{
          fontFamily: 'sans-serif',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof PokeList>

export const Example1: Story = {
  render: () => <PokeList searchValue="" />,
}

export const Example2: Story = {
  render: () => <PokeList searchValue="fire" />,
}
