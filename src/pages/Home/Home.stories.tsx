import { Meta, StoryObj } from '@storybook/react'

import { Home } from '.'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../../services/queryClient'

const meta: Meta<typeof Home> = {
  component: Home,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <span
          style={{
            fontFamily: 'sans-serif',
            color: '#fff',
          }}
        >
          <Story />
        </span>
      </QueryClientProvider>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Home>

export const Default: Story = {
  render: () => <Home onOpen={() => console.log('HOME!')} />,
}
