export const fetchFamily = async (pokemon) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemon}`,
    )
    const data = await response.json()
    const evolutionChainUrl = data.evolution_chain.url

    const evolutionChainResponse = await fetch(evolutionChainUrl)
    const data2 = await evolutionChainResponse.json()

    const evolutionChain = data2.chain

    const pokemonFamily = []

    const traverseEvolutionChain = (chain) => {
      const pokemon = {
        name: chain.species.name,
        url: chain.species.url.replace('-species', ''),
        evolutions: [],
      }

      if (chain.evolves_to.length > 0) {
        chain.evolves_to.forEach((evolution) => {
          pokemon.evolutions.push(traverseEvolutionChain(evolution))
        })
      }

      return pokemon
    }

    pokemonFamily.push(traverseEvolutionChain(evolutionChain))
    return pokemonFamily
  } catch (error) {
    console.log(`Erro: ${error}`)
    return null
  }
}
