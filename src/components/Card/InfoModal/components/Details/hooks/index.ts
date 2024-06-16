import { Pokemon } from "@/types"
import { formatString, isPokemon } from "@/utils"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"

export function useDetails(name: string, id: number) {
  const [section, setSection] = useState(0)

  const handleChangeSection = (section: number) => setSection(section)

  const { data: details } = useQuery({
    queryKey: ["pokemons", name],
    queryFn: async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      const data = await response.json()

      return isPokemon(data) ? (data as Pokemon) : null
    },
  })

  const { data: description } = useQuery({
    queryKey: ["description", id, name],
    queryFn: async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${id}`,
      )
      const data = await response.json()

      if (data.flavor_text_entries.length > 0) {
        const pokemonDescription = data.flavor_text_entries.filter(
          (flavorText: { language: { name: string } }) =>
            flavorText.language.name === "en",
        )

        const selectedDesc = pokemonDescription.filter(
          (flavorText: { flavor_text: string }) =>
            flavorText.flavor_text.includes(name.toUpperCase()),
        )

        return cleanUpDescription(
          name,
          selectedDesc.length > 0
            ? selectedDesc[0].flavor_text
            : pokemonDescription[0].flavor_text,
        )
      }

      return null
    },
  })

  function cleanUpDescription(name: string, description: string) {
    return description
      .replaceAll("\n", " ")
      .replaceAll("\f", " ")
      .replaceAll(name.toUpperCase(), formatString(name))
      .replaceAll("POKéMON", "pokémon")
  }

  return {
    details,
    section,
    description,
    handleChangeSection,
  }
}
