"use client"

import { queryClient } from "@/services/queryClient"
import { QueryClientProvider } from "@tanstack/react-query"
import { ReactNode } from "react"
import { FavoritesProvider } from "./FavoritesContext"
import { PokemonsWithUrlProvider } from "./PokemonsWithUrlContext"

export { useFavorites } from "./FavoritesContext"
export { usePokemonsWithUrl } from "./PokemonsWithUrlContext"

export function AppProvider({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <FavoritesProvider>
        <PokemonsWithUrlProvider>{children}</PokemonsWithUrlProvider>
      </FavoritesProvider>
    </QueryClientProvider>
  )
}
