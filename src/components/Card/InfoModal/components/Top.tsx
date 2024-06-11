"use client"

import { useFavorites } from "@/contexts"

interface TopProps {
  name: string
  onClose: () => void
}

export function Top({ name, onClose }: TopProps) {
  const { favorites, updateFavorites } = useFavorites()

  return (
    <div className="flex min-w-full justify-between">
      <button className="h-8 w-8" onClick={onClose}>
        <img className="h-full w-full" src={"arrow-left.svg"} alt="Back" />
      </button>

      <button className="h-8 w-8" onClick={() => updateFavorites(name)}>
        {favorites.includes(name) ? (
          <img
            className="h-full w-full"
            src={"favorite-filled.svg"}
            alt="Favorite"
          />
        ) : (
          <img
            className="h-full w-full"
            src={"favorite-outlined.svg"}
            alt="Favorite"
          />
        )}
      </button>
    </div>
  )
}
