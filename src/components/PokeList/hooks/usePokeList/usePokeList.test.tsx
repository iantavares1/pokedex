import { renderHook } from '@testing-library/react'

import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../../../../services/queryClient'
import { usePokeList } from '.'

describe('usePokeList', () => {
  it('should fetch pokemon by name', async () => {
    const searchValue = 'charmander'

    const { result } = renderHook(() => usePokeList(searchValue), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      ),
    })

    expect(result.current.pokemons).toHaveLength(0)
  })
})
