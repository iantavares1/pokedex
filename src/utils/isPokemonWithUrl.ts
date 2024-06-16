import { PokemonWithUrl } from "@/types"

export function isPokemonWithUrl(item: unknown): item is PokemonWithUrl {
  if (!item || typeof item !== "object") return false

  return "name" in item && "url" in item
}
