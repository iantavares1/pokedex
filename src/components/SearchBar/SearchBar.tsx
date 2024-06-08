"use client"

import { useRef, useState } from "react"

type SearchBarProps = {
  onSearch: (awdawd: string) => void
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [inputValue, setInputValue] = useState("")

  const handleInputValue = (value: string) => {
    onSearch(value.toLowerCase())
    setInputValue(value)
  }

  const handleClearInput = () => {
    if (inputRef.current !== null) {
      inputRef.current.value = ""
      inputRef.current.focus()
    }
    onSearch("")
    setInputValue("")
  }

  return (
    <div className="relative flex min-h-12 w-full">
      {inputValue === "" && (
        <button className="absolute left-2 top-1/2 z-20 h-8 w-8 -translate-y-1/2">
          <img className="h-full w-full" src="search.svg" alt="Search" />
        </button>
      )}

      {inputValue !== "" && (
        <button
          className="absolute left-2 top-1/2 z-20 h-8 w-8 -translate-y-1/2"
          onClick={() => handleClearInput()}
        >
          <img className="h-full w-full" src="clear.svg" alt="Clear" />
        </button>
      )}

      <input
        className="absolute h-full w-full max-w-[25rem] rounded-2xl bg-transparent p-2 pl-12 text-lg focus:outline-white"
        ref={inputRef}
        value={inputValue}
        placeholder="Search Pokémon"
        onChange={({ target }) => handleInputValue(target.value)}
      />
    </div>
  )
}
