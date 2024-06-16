"use client"

import Image from "next/image"
import { ButtonHTMLAttributes } from "react"
import { useSearchBar } from "./hooks"

export interface SearchBarProps {
  onSearch: (searchValue: string) => void
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const { inputRef, searchValue, handleClearSearch, handleChangeSearchValue } =
    useSearchBar(onSearch)

  return (
    <div className="relative flex min-h-12 w-full">
      {searchValue === "" && (
        <IconButton iconName="search" style={{ pointerEvents: "none" }} />
      )}

      {searchValue !== "" && (
        <IconButton iconName="clear" onClick={handleClearSearch} />
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

function IconButton<T>({
  iconName,
  ...props
}: {
  iconName: string
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="absolute left-2 top-1/2 z-20 h-8 w-8 -translate-y-1/2"
      {...props}
    >
      <Image
        className="h-full w-full"
        width={0}
        height={0}
        sizes="100"
        src={`${iconName}.svg`}
        alt={iconName}
      />
    </button>
  )
}
