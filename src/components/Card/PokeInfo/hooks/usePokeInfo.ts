// import { useContext, useEffect, useState } from "react"

// import { FavoritesContext } from "../../../../contexts/FavoritesContext"

// import { fetchPokemon } from "../../../../services/api/fetchPokemon"
// import { formatString } from "../../../../utils/formatString"

// export function usePokeInfo(name: string, id: number) {
//   const { favorites, updateFavorites } = useContext(FavoritesContext)

//   const [description, setDescription] = useState("")
//   const [pokemon, setPokemon] = useState<{
//     stats: {
//       base_stat: number
//       stat: {
//         name: string
//       }
//     }[]

//     height: number
//     weight: number
//   } | null>(null)

//   useEffect(() => {
//     const cleanUpDescription = (description: string) =>
//       description
//         .replaceAll("\n", " ")
//         .replaceAll("\f", " ")
//         .replaceAll(name.toUpperCase(), formatString(name))
//         .replaceAll("POKéMON", "pokémon")

//     const getDescription = async () => {
//       const response = await fetch(
//         `https://pokeapi.co/api/v2/pokemon-species/${id}`,
//       )
//       const data = await response.json()
//       if (data.flavor_text_entries.length > 0) {
//         const pokemonDescription = data.flavor_text_entries.filter(
//           (flavorText: { language: { name: string } }) =>
//             flavorText.language.name === "en",
//         )
//         const selectedDesc = pokemonDescription.filter(
//           (flavorText: { flavor_text: string }) =>
//             flavorText.flavor_text.includes(name.toUpperCase()),
//         )
//         setDescription(
//           cleanUpDescription(
//             selectedDesc.length > 0
//               ? selectedDesc[0].flavor_text
//               : pokemonDescription[0].flavor_text,
//           ),
//         )
//       }
//     }
//     getDescription()
//   }, [id, name])

//   useEffect(() => {
//     const getPokemon = async () => {
//       const response = await fetchPokemon(name)
//       setPokemon(response)
//     }
//     getPokemon()
//   }, [name])

//   return {
//     favorites,
//     updateFavorites,
//     description,
//     pokemon,
//   }
// }
