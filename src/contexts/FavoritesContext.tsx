"use client"

import { ReactNode, createContext, useContext } from "react"

interface FavoritesContextData {
  favorites: []
  updateFavorites: (name: string) => []
}

const FavoritesContext = createContext<FavoritesContextData>(
  {} as FavoritesContextData,
)

export function useFavorites() {
  return useContext(FavoritesContext)
}

export function FavoritesProvider({ children }: { children: ReactNode }) {
  return (
    <FavoritesContext.Provider
      value={{
        favorites: [],
        updateFavorites: (name: string) => [],
      }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}
