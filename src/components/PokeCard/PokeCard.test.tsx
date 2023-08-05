import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { PokeCard } from '.'

describe('PokeCard', () => {
  const id = 25
  const name = 'pikachu'
  const type = 'electric'
  const imgUrl =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png'

  it('should render correctly', () => {
    render(<PokeCard id={id} name={name} type={type} imgUrl={imgUrl} />)

    const container = screen.getByTestId('container')
    const pokemonName = screen.getByText(/pikachu/i)
    const pokemonType = screen.getByText(/electric/i)
    const pokemonId = screen.getByText('#025')
    const pokemonImg = screen.getByRole('img')

    expect(container).toBeVisible()
    expect(pokemonName).toBeVisible()
    expect(pokemonType).toBeVisible()
    expect(pokemonId).toBeVisible()

    expect(pokemonImg).toBeVisible()
    expect(pokemonImg).toHaveAttribute(
      'src',
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png',
    )
  })
})
