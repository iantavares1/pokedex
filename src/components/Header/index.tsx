import { Favorite } from '@mui/icons-material'

import { Page } from '../../types/page/Page'

import { Container, Button } from '@mui/material'

type HeaderProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<Page>>
  onSearch: React.Dispatch<React.SetStateAction<string>>
}

export const Header = ({ setIsOpen, onSearch }: HeaderProps) => {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 0,
      }}
    >
      <button
        onClick={() => onSearch('')}
        style={{
          all: 'unset',
          fontSize: '32px',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        Pokedex
      </button>
      <Button onClick={() => setIsOpen('favorites')} sx={{ height: '30px' }}>
        <Favorite sx={{ fontSize: 30, color: 'red' }} />
      </Button>
    </Container>
  )
}
