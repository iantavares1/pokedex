export const fetchType = async (type) => {
  try {
    const url = `https://pokeapi.co/api/v2/type/${type.toLowerCase()}`
    const response = await fetch(url)
    const data = await response.json()
    return data.pokemon
  } catch (error) {
    console.log('Error: ', error)
  }
}
