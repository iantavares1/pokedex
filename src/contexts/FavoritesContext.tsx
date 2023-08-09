import { createContext } from 'react'

type FavoritesContextData = {
  favorites: string[]
  updateFavorites: (name: string) => void
}

export const FavoritesContext = createContext<FavoritesContextData>({
  favorites: [],
  updateFavorites: () => [],
})
