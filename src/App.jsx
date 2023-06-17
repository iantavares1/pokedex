import React, { useEffect, useState, useContext } from 'react'

import { FavContext } from './contexts/favContext'

import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global-style.js'

import dark from './styles/themes/dark'
import light from './styles/themes/light'

import * as S from './styles/App.styles'

import { Slider } from './components/Slider'
import { SearchBar } from './components/SearchBar'
import { Divider } from './components/common/Divider'
import { PokeList } from './components/PokeList'
import { FavPage } from './components/FavPage'

import { HeartIcon } from './components/common/HeartIcon'
import { Switch } from './components/common/Switch.jsx'
import { BackIcon } from './components/common/BackIcon.jsx'

function App() {
  const [theme, setTheme] = useState(dark)
  const [home, setHome] = useState(true)
  const [type, setType] = useState('')
  const [search, setSearch] = useState('')
  const [fav, setFav] = useState(false)
  const [favoritesArr, setFavoritesArr] = useState([])

  const favoritesContext = useContext(FavContext)

  const updateFavorites = (name) => {
    setFavoritesArr(() => {
      let newFavorites = []
      if (favoritesArr.includes(name)) {
        newFavorites = favoritesArr.filter((favorite) => favorite !== name)
      } else {
        newFavorites = [...favoritesArr, name]
      }
      window.localStorage.setItem('favorites', JSON.stringify(newFavorites))
      return newFavorites
    })
  }

  const loadFavorites = () => {
    const loadedFavorites = JSON.parse(window.localStorage.getItem('favorites'))
    setFavoritesArr(loadedFavorites || [])
  }

  const loadTheme = () => {
    const loadedTheme = JSON.parse(window.localStorage.getItem('theme'))
    loadedTheme ? setTheme(loadedTheme) : setTheme(dark)
  }

  useEffect(() => {
    loadFavorites()
    loadTheme()
  }, [])

  const switchTheme = () => {
    const newTheme = theme === dark ? light : dark
    setTheme(newTheme)
    window.localStorage.setItem('theme', JSON.stringify(newTheme))
  }

  const handleHomeList = () => {
    setHome(true)
    setSearch('')
    setType('')
    setFav(false)
  }

  const handleSearchList = (str) => {
    setSearch(str)
    if (str !== '') {
      setHome(false)
      setType('')
      setFav(false)
    } else {
      handleHomeList(true)
    }
  }

  const handleTypeList = (str) => {
    setType(str)
    if (str !== '') {
      setHome(false)
      setSearch('')
      setFav(false)
    }
  }

  const handleFavList = () => {
    setFav(true)
    setHome(false)
    setSearch('')
    setType('')
  }

  return (
    <ThemeProvider theme={theme}>
      <FavContext.Provider value={{ favorites: favoritesArr, updateFavorites }}>
        <GlobalStyle />
        {!fav && (
          <S.Container>
            <S.Header>
              <button onClick={handleHomeList}>
                <h1>Pokédex</h1>
              </button>

              <span>
                <button onClick={handleFavList}>
                  <HeartIcon fill="red" />
                </button>
                <button onClick={switchTheme}>
                  <Switch currentTheme={theme} />
                </button>
              </span>
            </S.Header>
            <Slider onChoice={handleTypeList} />
            <SearchBar onChange={handleSearchList} />
            <Divider />
            <div>{favoritesContext.favorites}</div>
            {home && <PokeList home={home} />}
            {type !== '' && <PokeList type={type} />}
            {search !== '' && <PokeList search={search} />}
          </S.Container>
        )}
        {fav && (
          <S.Container>
            <S.Header>
              <span>
                <button onClick={handleHomeList}>
                  <BackIcon />
                </button>
                <h1>Favorites</h1>
              </span>

              <button onClick={switchTheme}>
                <Switch currentTheme={theme} />
              </button>
            </S.Header>
            <FavPage favorites={favoritesArr} />
          </S.Container>
        )}
      </FavContext.Provider>
    </ThemeProvider>
  )
}

export default App
