"use client"

import { useFavoritesContext } from "@/contexts"
import Image from "next/image"

interface TopProps {
  name: string
  onClose: () => void
}

export function Top({ name, onClose }: TopProps) {
  const { favorites, updateFavorites } = useFavoritesContext()

  return (
    <div className="flex min-w-full items-center justify-between">
      <button className="h-12 w-12" onClick={onClose}>
        <Image
          className="h-full w-full"
          width={0}
          height={0}
          sizes="100"
          src={"arrow-left.svg"}
          alt="Back"
        />
      </button>

      <button className="h-8 w-8" onClick={() => updateFavorites(name)}>
        {favorites.includes(name) ? (
          <Image
            className="h-full w-full"
            width={0}
            height={0}
            sizes="100"
            src={"favorite-filled.svg"}
            alt="Favorite"
          />
        ) : (
          <Image
            className="h-full w-full"
            width={0}
            height={0}
            sizes="100"
            src={"favorite-outlined.svg"}
            alt="Favorite"
          />
        )}
      </button>
    </div>
  )
}
