import { useRef, useState } from "react"
import { SearchBarProps } from "../SearchBar"

export function useSearchBar(onSearch: SearchBarProps["onSearch"]) {
  const [searchValue, setSearchValue] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChangeSearchValue = (value: string) => {
    const newSearchValue = value.toLowerCase()
    onSearch(newSearchValue)
    setSearchValue(newSearchValue)
  }

  const handleClearSearch = () => {
    if (inputRef.current !== null) {
      inputRef.current.value = ""
      inputRef.current.focus()
    }
    onSearch("")
    setSearchValue("")
  }

  return { inputRef, searchValue, handleChangeSearchValue, handleClearSearch }
}
