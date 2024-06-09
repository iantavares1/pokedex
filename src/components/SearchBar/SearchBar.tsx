"use client"

import { useSearchBar } from "./hooks/useSearchBar"

export interface SearchBarProps {
  onSearch: (searchValue: string) => void
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const { inputRef, searchValue, handleClearSearch, handleChangeSearchValue } =
    useSearchBar(onSearch)

  return (
    <div className="relative flex min-h-12 w-full">
      {searchValue === "" && (
        <button className="absolute left-2 top-1/2 z-20 h-8 w-8 -translate-y-1/2">
          <img className="h-full w-full" src="search.svg" alt="Search" />
        </button>
      )}

      {searchValue !== "" && (
        <button
          className="absolute left-2 top-1/2 z-20 h-8 w-8 -translate-y-1/2"
          onClick={handleClearSearch}
        >
          <img className="h-full w-full" src="clear.svg" alt="Clear" />
        </button>
      )}

      <input
        className="absolute h-full w-full max-w-[25rem] rounded-2xl bg-transparent p-2 pl-12 text-lg focus:outline-white"
        ref={inputRef}
        value={searchValue}
        placeholder="Search Pokémon"
        onChange={({ target }) => handleChangeSearchValue(target.value)}
      />
    </div>
  )
}
