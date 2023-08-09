import { useState } from 'react'

import { Favorite } from '@mui/icons-material'
import { Button, Typography } from '@mui/material'

import { Page } from '../../components/common/Page'
import { Header } from '../../components/common/Header'

import { Slider } from '../../components/Slider'
import { SearchBar } from '../../components/SearchBar'
import { PokeList } from '../../components/PokeList'

import { PageProps } from '../../types/page/PageProps'

export function Home({ onOpen }: PageProps) {
  const [searchValue, setSearchValue] = useState('')

  return (
    <Page>
      <Header>
        <Typography
          variant="h1"
          component="a"
          onClick={() => setSearchValue('')}
          style={{ cursor: 'pointer', fontSize: '2.6rem', fontWeight: 600 }}
        >
          Pokedex
        </Typography>
        <Button
          onClick={() => onOpen('favorites')}
          sx={{ minWidth: 'fit-content', padding: 0 }}
        >
          <Favorite sx={{ fontSize: 30, color: 'red' }} />
        </Button>
      </Header>
      <Slider onSelect={setSearchValue} />
      <SearchBar onSearch={setSearchValue} />
      <PokeList searchValue={searchValue} />
    </Page>
  )
}
