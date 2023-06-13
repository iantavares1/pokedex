import React, { useState } from 'react'

import * as S from './styles/App.styles'

import { Slider } from './components/Slider'
import { SearchBar } from './components/SearchBar'
import { Divider } from './components/common/Divider'
import { PokeList } from './components/PokeList'
import { HeartIcon } from './components/common/HeartIcon'

function App() {
  const [home, setHome] = useState(1)
  const [type, setType] = useState('')
  const [search, setSearch] = useState('')

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
    <S.Container>
      <S.Header onClick={handleHomeList}>
        <h1>Pokédex</h1>
        <button>
          <HeartIcon />
        </button>
      </S.Header>
      <Slider onChoice={handleTypeList} />
      <SearchBar onChange={handleSearchList} />
      <Divider />
      {home && <PokeList home={home} />}
      {type !== '' && <PokeList type={type} />}
      {search !== '' && <PokeList search={search} />}
    </S.Container>
  )
}

export default App
