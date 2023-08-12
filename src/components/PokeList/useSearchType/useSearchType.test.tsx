import { renderHook } from '@testing-library/react'
import { useSearchType } from '.'

describe('useSearchType', () => {
  it('should return type of searchValue as all, in this case', () => {
    const { result } = renderHook(() => useSearchType(''))

    expect(result.current).toEqual('all')
  })
  it('should return type of searchValue as pokemon, in this case', () => {
    const { result } = renderHook(() => useSearchType('charmander'))

    expect(result.current).toEqual('pokemon')
  })
  it('should return type of searchValue as type, in this case', () => {
    const { result } = renderHook(() => useSearchType('fire'))

    expect(result.current).toEqual('type')
  })
})
