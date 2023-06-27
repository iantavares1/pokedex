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
      }

      pokemonFamily.push(pokemon)

      if (chain.evolves_to.length > 0) {
        traverseEvolutionChain(chain.evolves_to[0])
      }

      if (chain.evolves_to.length > 1) {
        for (let i = 1; i < chain.evolves_to.length; i++) {
          traverseEvolutionChain(chain.evolves_to[i])
        }
      }
    }

    traverseEvolutionChain(evolutionChain)

    return pokemonFamily
  } catch (error) {
    console.log(`Erro: ${error}`)
    return null
  }
}
