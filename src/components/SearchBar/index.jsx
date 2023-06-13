import * as S from './styles'
import { SearchIcon } from '../common/SearchIcon'
import { ClearIcon } from '../common/ClearIcon'
import { useState, useRef } from 'react'

export const SearchBar = ({ onChange = '' }) => {
  const inputRef = useRef(null)
  const [inputValue, setInputValue] = useState('')

  const handleInputValue = (e) => {
    const value = e.target.value
    onChange(value)
    setInputValue(value)
  }

  const handleClearInput = () => {
    inputRef.current.value = ''
    inputRef.current.focus()
    onChange('')
    setInputValue('')
  }

  return (
    <S.Container>
      {inputValue === '' ? (
        <SearchIcon />
      ) : (
        <S.Button onClick={handleClearInput}>
          <ClearIcon />
        </S.Button>
      )}

      <input
        ref={inputRef}
        type="text"
        placeholder="Search Pokémon"
        value={inputValue}
        onChange={handleInputValue}
      />
    </S.Container>
  )
}
