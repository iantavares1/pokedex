import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Slider } from '.'
import { vi } from 'vitest'

const onSelectMock = vi.fn()

describe('Slider', () => {
  it('should render correctly', () => {
    render(<Slider onSelect={onSelectMock} />)
    const slider = screen.getByRole('slider')

    expect(slider).toBeInTheDocument()
    expect(slider).toBeVisible()
  })

  it('should have one TypeSpan to each pokemon type, 18 at total', () => {
    render(<Slider onSelect={onSelectMock} />)
    const typeSpans = screen.getAllByRole('listitem')

    expect(typeSpans).toHaveLength(18)
  })
})
