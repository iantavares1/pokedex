import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { expect } from 'vitest'

import { PokeList } from '.'

describe('PokeList', () => {
  it('should render correctly', () => {
    render(<PokeList searchValue="charmander" />)
    const container = screen.getByRole('list')

    expect(container).toBeInTheDocument()
  })
})
