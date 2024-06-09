import { useState } from "react"

export function useHome() {
  const [searchValue, setSearchValue] = useState("")
  const handleChangeSearchValue = (searchValue: string) =>
    setSearchValue(searchValue)

  return { searchValue, handleChangeSearchValue }
}
