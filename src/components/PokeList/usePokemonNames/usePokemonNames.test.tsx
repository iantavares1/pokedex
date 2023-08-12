import { renderHook, waitFor } from '@testing-library/react'
import { usePokemonNames } from '.'

describe('usePokemonNames', () => {
  it('should return an pokemon names array of length 999', async () => {
    const { result } = renderHook(() => usePokemonNames())

    await waitFor(() => expect(result.current).toHaveLength(999), {
      timeout: 4000,
    })
  })
  it("should return an array with this names: 'bulbasaur','pikachu','dragonite'", async () => {
    const { result } = renderHook(() => usePokemonNames())

    await waitFor(
      () => {
        expect(result.current).toContain('bulbasaur')
        expect(result.current).toContain('pikachu')
        expect(result.current).toContain('dragonite')
      },
      { timeout: 4000 },
    )
  })
})
