"use client"

import { useRouter } from "next/navigation"

export function Top() {
  function setSearchValue(awd: string) {}

  const router = useRouter()

  return (
    <div className="flex w-full items-center justify-between">
      <h1
        onClick={() => router.push("/")}
        className="cursor-pointer text-5xl font-semibold leading-none"
      >
        Pokedex
      </h1>

      <button onClick={() => router.push("favorites")} className="h-8 w-8">
        <img
          className="h-full w-full"
          src="favorite-filled.svg"
          alt="Favorite"
        />
      </button>
    </div>
  )
}
