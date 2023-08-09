import { Meta, StoryObj } from '@storybook/react'

import { SearchBar } from '.'

const meta: Meta<typeof SearchBar> = {
  component: SearchBar,
  decorators: [
    (Story) => (
      <div
        style={{
          background: 'black',
          color: 'white',
          height: '100vh',
          padding: '2rem',
          fontFamily: 'sans-serif',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof SearchBar>

export const Default: Story = {
  render: () => <SearchBar onSearch={() => console.log('search!')} />,
}
