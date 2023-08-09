import { Meta, StoryObj } from '@storybook/react'

import { PokeList } from '.'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../../services/queryClient'

const meta: Meta<typeof PokeList> = {
  component: PokeList,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <div
          style={{
            fontFamily: 'sans-serif',
            color: '#fff',
          }}
        >
          <Story />
        </div>
      </QueryClientProvider>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof PokeList>

export const Default: Story = {
  render: () => <PokeList searchValue="" />,
}
