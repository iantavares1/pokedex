"use client"

import { queryClient } from "@/services/queryClient"
import { QueryClientProvider } from "@tanstack/react-query"
import { ReactNode } from "react"
import { FavoritesProvider } from "./FavoritesContext"

export { useFavoritesContext } from "./FavoritesContext"

export function AppProvider({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <FavoritesProvider>{children}</FavoritesProvider>
    </QueryClientProvider>
  )
}
