import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { Header } from '.'

describe('Header', () => {
  const onSearchMock = vi.fn()
  const setIsOpenMock = vi.fn()

  it('should render correctly', () => {
    render(<Header onSearch={onSearchMock} setIsOpen={setIsOpenMock} />)
    expect(screen.getByText('Pokedex')).toBeInTheDocument()
    expect(screen.getByTestId('FavoriteIcon')).toBeInTheDocument()
  })

  it('should be able trigger functions on user click', () => {
    render(<Header onSearch={onSearchMock} setIsOpen={setIsOpenMock} />)
    fireEvent.click(screen.getByText('Pokedex'))

    expect(onSearchMock).toHaveBeenCalledWith('')

    fireEvent.click(screen.getByTestId('FavoriteIcon'))

    expect(setIsOpenMock).toHaveBeenCalledWith('favorites')
  })
})
