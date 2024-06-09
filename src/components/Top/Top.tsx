"use client"

import { usePathname, useRouter } from "next/navigation"

export function Top() {
  function setSearchValue(awd: string) {}

  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className="flex w-full items-center justify-between">
      <button onClick={() => router.push("/")} className="h-8 w-8">
        <img
          className="h-full w-full"
          src={`${pathname === "/" ? "home-filled" : "home-outlined"}.svg`}
          alt="Home"
        />
      </button>

      <h1 className="pointer-events-none text-4xl font-semibold leading-none">
        Pokedex
      </h1>

      <button onClick={() => router.push("favorites")} className="h-8 w-8">
        <img
          className="h-full w-full"
          src={`${pathname === "/favorites" ? "favorite-filled" : "favorite-outlined"}.svg`}
          alt="Favorite"
        />
      </button>
    </div>
  )
}
