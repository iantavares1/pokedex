import { ReactNode, createContext, useContext, useState } from "react"

export interface FavoritesContextData {
  favorites: string[]
  updateFavorites: (name: string) => void
}

const FavoritesContext = createContext<FavoritesContextData>(
  {} as FavoritesContextData,
)

export function useFavorites() {
  return useContext(FavoritesContext)
}

const FAVORITES_KEY = "favorites"

function getFavoritesFromLocalStorage() {
  const favorites = localStorage.getItem(FAVORITES_KEY)
  return favorites ? JSON.parse(favorites) : []
}

const initialFavorites = getFavoritesFromLocalStorage()

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>(initialFavorites)

  const updateFavorites = (name: string) =>
    setFavorites((prev) => {
      const newFavorites = prev.includes(name)
        ? prev.filter((favorite) => favorite !== name)
        : [...prev, name]

      localStorage.setItem("favorites", JSON.stringify(FAVORITES_KEY))
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
