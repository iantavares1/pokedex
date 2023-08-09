import { useRef, useState } from 'react'

import styled from '@emotion/styled'

import { Button } from '@mui/material'
import { Search, Clear } from '@mui/icons-material'

const Container = styled.div`
  position: relative;
  min-height: 3.2rem;
  display: flex;
  width: 100%;
`

const StyledButton = styled(Button)`
  position: absolute;
  z-index: 2;
  min-width: fit-content;
`

const StyledInput = styled.input`
  --padding-left: 3rem;

  all: unset;
  position: absolute;
  width: calc(98.5% - var(--padding-left));
  max-width: 25rem;
  padding: 0.5rem;
  padding-left: var(--padding-left);
  border-radius: 1rem;
  font-size: 1rem;

  &:focus {
    outline: 0.2rem solid #fff;
  }
`

type SearchBarProps = {
  onSearch: React.Dispatch<React.SetStateAction<string>>
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [inputValue, setInputValue] = useState('')

  const handleInputValue = (value: string) => {
    onSearch(value.toLowerCase())
    setInputValue(value)
  }

  const handleClearInput = () => {
    if (inputRef.current !== null) {
      inputRef.current.value = ''
      inputRef.current.focus()
    }
    onSearch('')
    setInputValue('')
  }

  return (
    <Container>
      {inputValue === '' && (
        <StyledButton>
          <Search sx={{ fontSize: 30, color: '#fff' }} />
        </StyledButton>
      )}
      {inputValue !== '' && (
        <StyledButton onClick={() => handleClearInput()}>
          <Clear sx={{ fontSize: 30, color: '#fff' }} />
        </StyledButton>
      )}
      <StyledInput
        placeholder="Search Pokémon"
        ref={inputRef}
        value={inputValue}
        onChange={({ target }) => handleInputValue(target.value)}
      />
    </Container>
  )
}
