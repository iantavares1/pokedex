export const fetchPokemon = async (pokemon, limit, offset) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}?limit=${limit}&offset=${offset}`
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(`Erro: ${error}`)
  }
}
