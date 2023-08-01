import { useState } from 'react'

import Container from '@mui/material/Container'

import { PageProps } from '../../types/page/PageProps'

import { Header } from '../../components/Header'
import { Slider } from '../../components/Slider'
import { SearchBar } from '../../components/SearchBar'
import { PokeList } from '../../components/PokeList'

export function Home({ onOpen }: PageProps) {
  const [searchValue, setSearchValue] = useState('')

  return (
    <Container
      sx={{
        minHeight: '100vh',
        padding: '1rem 1rem 3rem',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header onSearch={setSearchValue} setIsOpen={onOpen} />
      <Slider onSelect={setSearchValue} />
      <SearchBar onSearch={setSearchValue} />
      <PokeList searchValue={searchValue} />
    </Container>
  )
}
