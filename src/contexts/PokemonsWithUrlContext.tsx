"use client"

import { PokemonWithUrl } from "@/types"
import { useQuery } from "@tanstack/react-query"
import { ReactNode, createContext, useContext } from "react"

const PokemonsWithUrlContext = createContext<PokemonWithUrl[]>([])

export function usePokemonsWithUrl() {
  return useContext(PokemonsWithUrlContext)
}

export function PokemonsWithUrlProvider({ children }: { children: ReactNode }) {
  const { data: pokemonsWithUrl } = useQuery({
    queryKey: ["pokemons-with-url"],
    queryFn: async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?limit=999",
      )
      const data = await response.json()
      return data.results
    },
  })

  return (
    <PokemonsWithUrlContext.Provider value={pokemonsWithUrl || []}>
      {children}
    </PokemonsWithUrlContext.Provider>
  )
}
