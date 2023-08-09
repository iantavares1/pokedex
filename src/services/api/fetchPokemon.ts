import axios from 'axios'

export const fetchPokemon = async (
  pokemon: string,
  limit?: number,
  offset?: number,
) => {
  let url = `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}?limit=${limit}}`
  if (offset) url = `${url}&offset=${offset}`
  try {
    const response = await axios.get(url)
    const data = response.data
    return data
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}
