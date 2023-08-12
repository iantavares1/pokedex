import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { Slider } from '.'
import { vi } from 'vitest'

const onSelectMock = vi.fn()

describe('Slider', () => {
  it('should render correctly', () => {
    render(<Slider onSelect={onSelectMock} />)
    const slider = screen.getByRole('slider')
    const typeSpans = screen.getAllByRole('listitem')

    expect(slider).toBeInTheDocument()
    expect(typeSpans).toHaveLength(18)
  })
  it('should be able select type on slider', () => {
    const { getByText } = render(<Slider onSelect={onSelectMock} />)
    const typeSpan = getByText(/fire/i)

    fireEvent.click(typeSpan, 'fire')
    expect(onSelectMock).toHaveBeenCalledWith('fire')
  })
})
