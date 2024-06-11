"use client"

import { List, SearchBar, Slider, Top } from "@/components"
import { useHome } from "./hooks/useHome"

export default function Home() {
  const { searchValue, handleChangeSearchValue } = useHome()
  return (
    <>
      <Top />
      <Slider onSelect={handleChangeSearchValue} />
      <SearchBar onSearch={handleChangeSearchValue} />
      <div className="mt-8 w-full">
        <List search={searchValue} />
      </div>
    </>
  )
}
