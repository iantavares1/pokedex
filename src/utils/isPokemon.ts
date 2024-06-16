import { Pokemon } from "@/types"

export function isPokemon(item: unknown): item is Pokemon {
  if (!item || typeof item !== "object") return false

  return "id" in item && "name" in item && "types" in item
}
