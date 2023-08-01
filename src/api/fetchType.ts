import axios from 'axios'

export const fetchType = async (type: string) => {
  try {
    const url = `https://pokeapi.co/api/v2/type/${type}`
    const response = await axios.get(url)
    const pokemons = response.data.pokemon
    return pokemons
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}
