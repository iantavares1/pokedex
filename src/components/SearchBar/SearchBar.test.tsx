import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import { SearchBar } from '.'
// import userEvent from '@testing-library/user-event'

const onSearchMock = vi.fn()

describe('SearchBar', () => {
  it('should render correctly', () => {
    render(<SearchBar onSearch={onSearchMock} />)
    const input = screen.getByPlaceholderText(/search pokémon/i)
    const button = screen.getByRole('button')

    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  // it('should be able interact with the input', () => {
  //   render(<SearchBar onSearch={onSearchMock} />)
  //   const input = screen.getByPlaceholderText(/search pokémon/i)

  //   userEvent.type(input, 'Pikachu')

  //   expect(onSearchMock).toHaveBeenCalledWith('Pikachu')
  // })
})
