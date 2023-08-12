import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { vi } from 'vitest'

import { SearchBar } from '.'

const onSearchMock = vi.fn()

describe('SearchBar', () => {
  it('should render correctly', () => {
    render(<SearchBar onSearch={onSearchMock} />)
    const input = screen.getByPlaceholderText(/search pokémon/i)
    const button = screen.getByRole('button')

    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })
  it('should be able interact with the input', () => {
    render(<SearchBar onSearch={onSearchMock} />)
    const input = screen.getByPlaceholderText(/search pokémon/i)

    fireEvent.change(input, { target: { value: 'pikachu' } })

    expect(onSearchMock).toHaveBeenCalledWith('pikachu')
  })
})
