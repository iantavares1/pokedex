import { useEffect, useState } from 'react'

import * as S from './styles'

import { fetchPokemon } from '../../api/fetchPokemon'
import { fetchType } from '../../api/fetchType'
import { PokeCard } from '../PokeCard'

export const PokeList = ({ home, type, search }) => {
  const [count, setCount] = useState(0)
  const [NamesArr, setNamesArr] = useState([])
  const [allPokemons, setAllPokemons] = useState([])
  const [pokeData, setPokeData] = useState([])

  useEffect(() => {
    const getCount = async () => {
      const response = await fetchPokemon('')
      setCount(response.count)
    }
    getCount()
  }, [])

  useEffect(() => {
    const getNames = async () => {
      try {
        const response = await fetchPokemon('', count)
        const names = response.results.map((pokemon) => pokemon.name)
        setNamesArr(names)
      } catch (error) {
        console.log(`Erro: ${error}`)
      }
    }
    getNames()
  }, [count])

  useEffect(() => {
    if (home) {
      const getData = async () => {
        try {
          const response = await fetchPokemon('', 150)

          setAllPokemons(response.results)
        } catch (error) {
          console.log(`Erro: ${error}`)
        }
      }
      getData()
    } else if (type) {
      const getData = async () => {
        try {
          const response = await fetchType(type)
          const data = response.map((obj) => obj.pokemon)
          setAllPokemons(data)
        } catch (error) {
          console.log(`Erro: ${error}`)
        }
      }
      getData()
    } else {
      const getData = async () => {
        try {
          const searchedNames = NamesArr.filter((name) => name.includes(search))
          const promises = searchedNames.map((name) => fetchPokemon(name))
          const pokemons = await Promise.all(promises)
          setPokeData(pokemons)
        } catch (error) {
          console.log(`Erro: ${error}`)
        }
      }
      getData()
    }
  }, [home, type, search, NamesArr])

  useEffect(() => {
    const getPokeData = async () => {
      const names = allPokemons.map((pokemon) => pokemon.name)
      const promises = names.map((name) => fetchPokemon(name))
      const pokemons = await Promise.all(promises)
      setPokeData(pokemons)
    }

    getPokeData()
  }, [allPokemons])

  return (
    <S.Container>
      {pokeData.map(
        (pokemon) =>
          pokemon.id < 1000 && (
            <PokeCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              type={pokemon.types[0].type.name}
              type2={pokemon.types[1] ? pokemon.types[1].type.name : null}
              imgUrl={pokemon.sprites.other.home.front_default}
              imgUrl2={pokemon.sprites.front_default}
            />
          ),
      )}
    </S.Container>
  )
}
