import { useRef, useState } from 'react'

import styled from '@emotion/styled'

import { Search, Clear } from '@mui/icons-material'

const Container = styled.div`
  position: relative;
  height: 3.2rem;
  display: flex;

  button {
    all: unset;
    cursor: pointer;
    position: absolute;
    z-index: 2;
    top: 0.1rem;
    left: 0.4rem;
  }
`

const Input = styled.input`
  all: unset;
  position: absolute;
  width: calc(100% - 4.5rem);
  padding: 0.5rem;
  padding-left: 4rem;
  border-radius: 1rem;
  font-size: 1.5rem;

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
      {inputValue === '' ? (
        <button>
          <Search sx={{ fontSize: 30 }} />
        </button>
      ) : (
        <button onClick={() => handleClearInput()}>
          <Clear sx={{ fontSize: 30 }} />
        </button>
      )}

      <Input
        type="text"
        placeholder="Search Pokémon"
        ref={inputRef}
        value={inputValue}
        onChange={({ target }) => handleInputValue(target.value)}
      />
    </Container>
  )
}
