import { useState } from 'react'

import { FavoritesContext } from './contexts/FavoritesContext'

import { Page } from './types/page/Page'

import { Home } from './pages/Home'
import { Favorites } from './pages/Favorites'

export default function App() {
  const loadFavorites = () => {
    const loadedFavorites = window.localStorage.getItem('favorites')
    if (loadedFavorites) {
      return JSON.parse(loadedFavorites)
    }
    return []
  }

  const [page, setPage] = useState<Page>('home')
  const [favoritesArray, setFavoritesArray] = useState<string[]>(
    loadFavorites(),
  )

  const updateFavorites = (name: string) => {
    let newFavorites = []
    setFavoritesArray((oldFavorites) => {
      if (oldFavorites.includes(name)) {
        newFavorites = oldFavorites.filter((favorite) => favorite !== name)
      } else {
        newFavorites = [...oldFavorites, name]
      }
      window.localStorage.setItem('favorites', JSON.stringify(newFavorites))
      return newFavorites
    })
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites: favoritesArray, updateFavorites }}
    >
      {page === 'home' && <Home onOpen={setPage} />}
      {page === 'favorites' && <Favorites onOpen={setPage} />}
    </FavoritesContext.Provider>
  )
}
