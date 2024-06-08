import { usePokemonsWithUrl } from "@/contexts"
import { Pokemon, PokemonProps } from "@/types"
import { isPokemon, pokemonTypes } from "@/utils"
import { useQueries } from "@tanstack/react-query"

export function useList(search: string) {
  const searchType =
    search === ""
      ? "all"
      : pokemonTypes.find((type) => type === search)
        ? "byType"
        : "byName"

  const pokemonsWithUrl = usePokemonsWithUrl()

  const { data: pokemons, pending } = useQueries({
    queries: pokemonsWithUrl.slice(0, 100).map(({ url }) => ({
      queryKey: ["pokemons", url, pokemonsWithUrl],
      queryFn: async () => {
        const response = await fetch(url)
        const data = await response.json()
        return data
      },
    })),
    combine: (results) => {
      return {
        data: results
          .map(({ data }) => (isPokemon(data) ? (data as Pokemon) : null))
          .map(
            (pokemon) =>
              pokemon &&
              ({
                id: pokemon.id,
                name: pokemon.name,
                types: [
                  pokemon.types[0]?.type.name,
                  pokemon.types[1]?.type.name,
                ],
                imgPaths: [
                  pokemon.sprites?.other?.home?.front_default,
                  pokemon.sprites.front_default,
                ],
              } satisfies PokemonProps),
          ),
        pending: results.map(({ isPending }) => isPending),
      }
    },
  })

  async function fetchPokemonTypeName(
    type: string,
  ): Promise<Pokemon[] | undefined> {
    try {
      const url = `https://pokeapi.co/api/v2/type/${type}`

      const response = await fetch(url)
      const data = await response.json()

      return data.pokemons
    } catch (error) {
      console.log(`Error: ${error}`)
    }
  }

  // const fetchAllPokemons = async () => {
  //   if (!PokemonWithUrl) return null

  //   const response = await Promise.all(
  //     PokemonWithUrl.map(({ name }: { name: string }) => fetchPokemon(name)),
  //   )

  //   const data = response.flatMap((item) =>
  //     item?.filter((item) => item !== undefined),
  //   )

  //   return data
  // }

  // const fetchPokemonByType: Promise<Pokemon[] | null> = async () => {
  //   const pokemons = await fetchPokemonTypeName(search)

  //   if (pokemons) {
  //     return pokemons.map(({ name }) => fetchPokemon(name))
  //   } else undefined
  //   // return Promise.all(pokemons.map(({ name }) => fetchPokemon(name))).then(
  //   //   (res) =>
  //   //     res.some((item) => !item) ? undefined : res.map((item) => item && item),
  //   // )
  // }

  // const fetchPokemonByName: Promise<Pokemon[] | null> = async () => {
  //   if (!pokemonNames) return null

  //   const names = pokemonNames.filter((name) => name.includes(search))
  //   return Promise.all(names.map((name) => fetchPokemon(name)))
  // }

  // const { data, isLoading } = useQuery({
  //   queryKey: ["pokemons", searchType],
  //   queryFn: () => fetchAllPokemons(),
  // })

  // const pokemons = data

  const skeletons = pending.some((item) => item)
    ? Array.from({ length: 150 }, (_, index) => index)
    : null

  return { pokemons, skeletons }
}
