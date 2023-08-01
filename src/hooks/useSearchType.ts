import { useState, useEffect } from 'react'
import { pokemonTypes } from '../utils/pokemon/pokemonTypes'

export function useSearchType(searchValue: string) {
  const [type, setType] = useState<'all' | 'type' | 'pokemon'>('all')

  useEffect(
    () =>
      setType(() => {
        if (searchValue === '') return 'all'
        const verify = pokemonTypes.find((type) => type === searchValue)
        if (verify) return 'type'
        return 'pokemon'
      }),
    [searchValue],
  )

  return type
}
