"use client"

import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"

export function Top() {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className="flex w-full items-center justify-between">
      <button onClick={() => router.push("/")} className="h-8 w-8">
        <Image
          className="h-full w-full"
          width={0}
          height={0}
          sizes="100"
          src={`${pathname === "/" ? "home-filled" : "home-outlined"}.svg`}
          alt="Home"
        />
      </button>

      <h1 className="pointer-events-none text-[2rem] font-semibold leading-none">
        Pokedex
      </h1>

      <button onClick={() => router.push("favorites")} className="h-8 w-8">
        <Image
          className="h-full w-full"
          width={0}
          height={0}
          sizes="100"
          src={`${pathname === "/favorites" ? "favorite-filled" : "favorite-outlined"}.svg`}
          alt="Favorite"
        />
      </button>
    </div>
  )
}
