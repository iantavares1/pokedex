import { Meta, StoryObj } from '@storybook/react'

import { Slider } from '.'

const meta: Meta<typeof Slider> = {
  component: Slider,
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

type Story = StoryObj<typeof Slider>

export const Default: Story = {
  render: () => <Slider onSelect={() => console.log('search!')} />,
}
