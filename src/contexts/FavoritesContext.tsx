import { ReactNode, createContext, useContext, useState } from "react"

export interface FavoritesContextData {
  favorites: string[]
  updateFavorites: (name: string) => void
}

const FavoritesContext = createContext<FavoritesContextData>(
  {} as FavoritesContextData,
)

export function useFavoritesContext() {
  return useContext(FavoritesContext)
}

const FAVORITES_KEY = "favorites"

let initialFavorites: string[] = []

if (typeof window !== "undefined") {
  const favorites = localStorage.getItem(FAVORITES_KEY)
  initialFavorites = favorites ? JSON.parse(favorites) : []
}

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>(initialFavorites)

  const updateFavorites = (name: string) =>
    setFavorites((prev) => {
      if (!(typeof window !== "undefined")) return prev

      const newFavorites = prev.includes(name)
        ? prev.filter((favorite) => favorite !== name)
        : [...prev, name]

      localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites))
      return newFavorites
    })

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        updateFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}
