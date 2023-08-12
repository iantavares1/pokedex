import { renderHook, waitFor } from '@testing-library/react'

import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../../../services/queryClient'
import { usePokeList } from '.'

describe('usePokeList', () => {
  it('should fetch pokemon', async () => {
    const { result } = renderHook(() => usePokeList(''), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      ),
    })

    await waitFor(() => expect(result.current.pokemons).toHaveLength(150), {
      timeout: 4000,
    })
  })
  it('should fetch pokemon by type', async () => {
    const { result } = renderHook(() => usePokeList('fire'), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      ),
    })

    await waitFor(() => expect(result.current.pokemons).toHaveLength(101), {
      timeout: 4000,
    })
  })
  it('should fetch pokemon by name', async () => {
    const { result } = renderHook(() => usePokeList('pikachu'), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      ),
    })

    await waitFor(() => expect(result.current.pokemons).toHaveLength(1), {
      timeout: 4000,
    })
  })
})
