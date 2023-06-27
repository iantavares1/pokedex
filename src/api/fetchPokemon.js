export const fetchPokemon = async (pokemon, limit) => {
  let url = `https://pokeapi.co/api/v2/pokemon/${
    typeof pokemon === 'string' ? pokemon.toLowerCase() : pokemon
  }`
  try {
    if (limit) {
      url = `${url}?limit=${limit}`
    }
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(`Erro: ${error}`)
  }
}
