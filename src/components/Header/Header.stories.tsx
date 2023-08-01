import { Meta, StoryObj } from '@storybook/react'

import { Header } from '.'

const meta: Meta<typeof Header> = {
  component: Header,
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

type Story = StoryObj<typeof Header>

export const Default: Story = {
  render: () => (
    <Header
      onSearch={() => console.log('click')}
      setIsOpen={() => console.log('click')}
    />
  ),
}
