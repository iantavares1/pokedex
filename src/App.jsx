import React, { useEffect, useState } from 'react'

import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global-style.js'

import dark from './styles/themes/dark'
import light from './styles/themes/light'

import * as S from './styles/App.styles'

import { Slider } from './components/Slider'
import { SearchBar } from './components/SearchBar'
import { Divider } from './components/common/Divider'
import { PokeList } from './components/PokeList'
import { HeartIcon } from './components/common/HeartIcon'
import { Switch } from './components/common/Switch.jsx'

function App() {
  const [theme, setTheme] = useState(dark)
  const [home, setHome] = useState(1)
  const [type, setType] = useState('')
  const [search, setSearch] = useState('')

  const loadTheme = () => {
    const loadedTheme = JSON.parse(window.localStorage.getItem('theme'))
    loadedTheme ? setTheme(loadedTheme) : setTheme(dark)
  }

  useEffect(() => {
    loadTheme()
  }, [])

  const switchTheme = () => {
    const newTheme = theme === dark ? light : dark
    setTheme(newTheme)
    window.localStorage.setItem('theme', JSON.stringify(newTheme))
  }

  const handleHomeList = (bool = true) => {
    setHome(bool)
    if (bool) {
      setSearch('')
      setType('')
    }
  }

  const handleSearchList = (str) => {
    setSearch(str)
    if (str !== '') {
      setHome(false)
      setType('')
    } else {
      handleHomeList(true)
    }
  }

  const handleTypeList = (str) => {
    setType(str)
    if (str !== '') {
      setHome(false)
      setSearch('')
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <S.Container>
        <S.Header onClick={handleHomeList}>
          <h1>Pokédex</h1>
          <span>
            <button>
              <HeartIcon />
            </button>
            <button onClick={switchTheme}>
              <Switch currentTheme={theme} />
            </button>
          </span>
        </S.Header>
        <Slider onChoice={handleTypeList} />
        <SearchBar onChange={handleSearchList} />
        <Divider />
        {home && <PokeList home={home} />}
        {type !== '' && <PokeList type={type} />}
        {search !== '' && <PokeList search={search} />}
      </S.Container>
    </ThemeProvider>
  )
}

export default App
