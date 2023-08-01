import { Meta, StoryObj } from '@storybook/react'

import { Favorites } from '.'

const meta: Meta<typeof Favorites> = {
  component: Favorites,
  decorators: [
    (Story) => (
      <span
        style={{
          fontFamily: 'sans-serif',
        }}
      >
        <Story />
      </span>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Favorites>

export const Default: Story = {
  render: () => <Favorites onOpen={() => console.log('FAVORITES!')} />,
}
