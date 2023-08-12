import '@testing-library/jest-dom'
import { render, waitFor } from '@testing-library/react'
import { expect } from 'vitest'

import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../../services/queryClient'
import { PokeList } from '.'

describe('PokeList', () => {
  it('should render correctly', async () => {
    const { getByText, getByAltText, getAllByText } = render(
      <PokeList searchValue="" />,
      {
        wrapper: ({ children }) => (
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        ),
      },
    )

    await waitFor(
      () => {
        expect(getByText(/pikachu/i)).toBeInTheDocument()
        expect(getByText('#025')).toBeInTheDocument()
        expect(getAllByText(/electric/i)[0]).toBeInTheDocument()

        expect(getByAltText('pikachu')).toBeInTheDocument()
        expect(getByAltText('pikachu')).toHaveAttribute(
          'src',
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png',
        )
      },
      {
        timeout: 4000,
      },
    )
  })
  it('should render error message when not find pokemon', async () => {
    const { getByText } = render(<PokeList searchValue="asdasdasdasd" />, {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      ),
    })

    await waitFor(() =>
      expect(getByText('Pokemon Not Found!')).toBeInTheDocument(),
    )
  })
})
