export const fetchPokemon = async (pokemon, limit, offset) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${
      typeof pokemon === 'string' ? pokemon.toLowerCase() : pokemon
    }?limit=${limit}&offset=${offset}`
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(`Erro: ${error}`)
  }
}
