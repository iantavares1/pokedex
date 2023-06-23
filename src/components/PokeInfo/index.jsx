import { useState, useEffect, useContext } from 'react'

import * as S from './styles'

import { FavContext } from '../../contexts/favContext'

import { BackIcon } from '../common/BackIcon'
import { HeartIcon } from '../common/HeartIcon'
import { bgColors } from '../../utils/bgColors'
import { typeIcons } from '../../utils/typeIcons'

import { formatString } from '../../utils/formatString'
import { fetchPokemon } from '../../api/fetchPokemon'
import { fetchFamily } from '../../api/fetchFamily'
import { formatId } from '../../utils/formatId'
import { ArrowIcon } from '../common/ArrowIcon'

export const PokeInfo = ({ info, isOpen }) => {
  const favoritesContext = useContext(FavContext)

  const { name, id, type, type2, imgUrl, imgUrl2 } = info
  const TypeIcon = typeIcons[type]
  const TypeIcon2 = typeIcons[type2]

  const [isFavorite, setIsFavorite] = useState(false)
  const [description, setDescription] = useState('')
  const [detailsPage, setDetailsPage] = useState('about')

  const [pokemon, setPokemon] = useState({})
  const [stats, setStats] = useState([])
  const [evolutions, setEvolutions] = useState(null)

  const loadIsFavorite = () =>
    setIsFavorite(!!favoritesContext.favorites.includes(name))

  const handleIsFavorite = () => {
    favoritesContext.updateFavorites(name)
    loadIsFavorite()
  }

  const handleClosePokeInfo = () => {
    isOpen(false)
  }

  const handleDetailsPage = (page) => setDetailsPage(page)

  useEffect(() => {
    loadIsFavorite()
  })

  const cleanUpDescription = (description) => {
    const cleanedDescription = description
      .replaceAll('\n', ' ')
      .replaceAll('\f', ' ')
      .replaceAll(name.toUpperCase(), formatString(name))
      .replaceAll('POKéMON', 'pokémon')

    return cleanedDescription
  }

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const response = await fetchPokemon(name)
        setPokemon(response)
      } catch (error) {
        console.log(`Erro: ${error}`)
      }
    }
    getPokemon()
  }, [isOpen, name])

  useEffect(() => {
    const getDesciption = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${id}`,
        )
        const data = await response.json()
        const pokemonDesc = data.flavor_text_entries.filter(
          (flavorText) => flavorText.language.name === 'en',
        )
        const selectedDesc = pokemonDesc.filter((flavorText) =>
          flavorText.flavor_text.includes(name.toUpperCase()),
        )
        setDescription(
          cleanUpDescription(
            selectedDesc.length > 0
              ? selectedDesc[0].flavor_text
              : pokemonDesc[0].flavor_text,
          ),
        )
      } catch (error) {
        console.log(`Erro: ${error}`)
      }
    }
    getDesciption()
  })

  useEffect(() => {
    setStats(pokemon.stats)
  }, [pokemon])

  useEffect(() => {
    const getEvolutions = async () => {
      try {
        const response = await fetchFamily(id)
        if (response.length <= 1) setEvolutions(null)
        else {
          const promises = response.map(({ name }) => fetchPokemon(name))
          const pokemons = await Promise.all(promises)
          setEvolutions(pokemons)
        }
      } catch (error) {
        console.log(`Erro: ${error}`)
      }
    }
    getEvolutions()
  }, [id, name])

  return (
    <S.Container bg={bgColors[type]}>
      <div className="top-buttons">
        <S.Button onClick={handleClosePokeInfo}>
          <BackIcon fill={'white'} />
        </S.Button>

        <S.Button onClick={handleIsFavorite}>
          <HeartIcon fill={isFavorite && 'white'} />
        </S.Button>
      </div>
      <TypeIcon />

      <S.Main>
        <div className="top">
          <h1>{formatString(name)}</h1>
          <span>{formatId(id)}</span>
        </div>
        <div className="types-wrapper">
          <S.Type bg={bgColors[type]}>
            <TypeIcon />
            {formatString(type)}
          </S.Type>
          {type2 && (
            <S.Type bg={bgColors[type2]}>
              <TypeIcon2 />
              {formatString(type2)}
            </S.Type>
          )}
        </div>
        <S.Img src={imgUrl || imgUrl2} />
      </S.Main>
      <S.DetailsWrapper>
        <header>
          <span className="buttons">
            <div className="button-wrapper">
              <S.DetailButton
                isactive={detailsPage === 'about' ? 'y' : 'n'}
                onClick={() => handleDetailsPage('about')}
              >
                About
              </S.DetailButton>
            </div>
            <div className="button-wrapper">
              <S.DetailButton
                isactive={detailsPage === 'stats' ? 'y' : 'n'}
                onClick={() => handleDetailsPage('stats')}
              >
                Stats
              </S.DetailButton>
            </div>
            {evolutions && (
              <div className="button-wrapper">
                <S.DetailButton
                  isactive={detailsPage === 'evolution' ? 'y' : 'n'}
                  onClick={() => handleDetailsPage('evolution')}
                >
                  Evolution
                </S.DetailButton>
              </div>
            )}
          </span>
        </header>
        {detailsPage === 'about' && (
          <S.Detail className="about">
            <p className="description">{description}</p>
            <S.Metrics bg={bgColors[type]}>
              <div className="height">
                <span className="metric-name">Height</span>
                <span className="metric-value">
                  <strong>{pokemon.height / 10} m</strong>
                </span>
              </div>
              <div className="weight">
                <span className="metric-name">Weight</span>
                <span className="metric-value">
                  <strong>{pokemon.weight / 10} Kg</strong>
                </span>
              </div>
            </S.Metrics>
          </S.Detail>
        )}
        {detailsPage === 'stats' && (
          <S.Detail className="stats">
            {stats.map((stat) => (
              <div key={stat.stat.name} className="stat">
                <span>
                  {stat.stat.name.includes('special')
                    ? stat.stat.name
                        .replace('-', ' ')
                        .replace('special', 'Sp.')
                        .replace('attack', 'Atk')
                        .replace('defense', 'Def')
                    : formatString(stat.stat.name)}
                </span>
                <div className="stat-wrapper">
                  <span>{stat.base_stat}</span>
                  <div className="bar-wrapper">
                    <S.StatBar
                      style={{ background: `${bgColors[type]}` }}
                      w={`calc(${stat.base_stat}% * 0.67)`}
                      animation={'y'}
                    />
                    <S.StatBar w="100%" />
                  </div>
                </div>
              </div>
            ))}
          </S.Detail>
        )}
        {detailsPage === 'evolution' && (
          <S.Detail className="evolution">
            {evolutions &&
              evolutions.map((pokemon, i) => {
                if (i + 1 < evolutions.length) {
                  return (
                    <div className="evolution-wrapper" key={i}>
                      <div className="pokemon-wrapper">
                        <S.Img2
                          src={
                            pokemon.sprites.other.home.front_default ||
                            pokemon.sprites.front_default
                          }
                        />
                        <span>{formatString(pokemon.name)}</span>
                      </div>
                      <ArrowIcon />
                      <div className="pokemon-wrapper">
                        <S.Img2
                          src={
                            evolutions[i + 1].sprites.other.home
                              .front_default ||
                            evolutions[i + 1].sprites.front_default
                          }
                        />
                        <span>{formatString(evolutions[i + 1].name)}</span>
                      </div>
                    </div>
                  )
                }
                return null
              })}
          </S.Detail>
        )}
      </S.DetailsWrapper>
    </S.Container>
  )
}
