import { Meta, StoryObj } from '@storybook/react'

import { Home } from '.'

const meta: Meta<typeof Home> = {
  component: Home,
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

type Story = StoryObj<typeof Home>

export const Default: Story = {
  render: () => <Home onOpen={() => console.log('HOME!')} />,
}
