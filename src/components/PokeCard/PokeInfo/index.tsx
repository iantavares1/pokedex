import { useContext, useEffect, useState } from 'react'

import { FavoritesContext } from '../../../contexts/FavoritesContext'

import { PokeCardProps } from '..'

import {
  ArrowBackIosNewSharp,
  Favorite,
  FavoriteBorder,
} from '@mui/icons-material'

import {
  Container,
  Header,
  Button,
  Info,
  Type,
  ImgWrapper,
  Main,
  Section,
  SectionButton,
  StatBar,
  StatBarWrapper,
  Metrics,
} from './styles'

import { backgroundColors } from '../../../utils/pokemon/backgroundColors'
import { formatString } from '../../../utils/functions/formatString'
import { formatId } from '../../../utils/functions/formatId'
import { fetchPokemon } from '../../../services/api/fetchPokemon'
import { Modal } from '@mui/material'

type PokeInfoProps = {
  onOpen: React.Dispatch<React.SetStateAction<boolean>>
  pokemonInfo: PokeCardProps
}

export const PokeInfo = ({ onOpen, pokemonInfo }: PokeInfoProps) => {
  const { favorites, updateFavorites } = useContext(FavoritesContext)
  const { name, id, type, imgUrl, secondaryImgUrl, secondaryType } = pokemonInfo

  const [description, setDescription] = useState('')
  const [pokemon, setPokemon] = useState<{
    stats: {
      base_stat: number
      stat: {
        name: string
      }
    }[]

    height: number
    weight: number
  } | null>(null)
  const [section, setSection] = useState(0)

  useEffect(() => {
    const cleanUpDescription = (description: string) =>
      description
        .replaceAll('\n', ' ')
        .replaceAll('\f', ' ')
        .replaceAll(name.toUpperCase(), formatString(name))
        .replaceAll('POKéMON', 'pokémon')

    const getDescription = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${id}`,
      )
      const data = await response.json()
      if (data.flavor_text_entries.length > 0) {
        const pokemonDescription = data.flavor_text_entries.filter(
          (flavorText: { language: { name: string } }) =>
            flavorText.language.name === 'en',
        )
        const selectedDesc = pokemonDescription.filter(
          (flavorText: { flavor_text: string }) =>
            flavorText.flavor_text.includes(name.toUpperCase()),
        )
        setDescription(
          cleanUpDescription(
            selectedDesc.length > 0
              ? selectedDesc[0].flavor_text
              : pokemonDescription[0].flavor_text,
          ),
        )
      }
    }
    getDescription()
  }, [id, name])

  useEffect(() => {
    const getPokemon = async () => {
      const response = await fetchPokemon(name)
      setPokemon(response)
    }
    getPokemon()
  }, [name])

  return (
    <Modal open={true}>
      <Container bg={backgroundColors[type]}>
        <Header>
          <Button onClick={() => onOpen(false)}>
            <ArrowBackIosNewSharp sx={{ fontSize: 30 }} />
          </Button>
          <Button onClick={() => updateFavorites(name)}>
            {favorites.includes(name) ? (
              <Favorite sx={{ fontSize: 30 }} />
            ) : (
              <FavoriteBorder sx={{ fontSize: 30 }} />
            )}
          </Button>
        </Header>
        <Info>
          <h1>{formatString(name)}</h1>
          <span style={{ gridColumn: '2/3' }}>{formatId(id)}</span>
          <span style={{ display: 'grid', gap: '0.3rem' }}>
            <Type bg={backgroundColors[type]}>{formatString(type)}</Type>
            {secondaryType && (
              <Type bg={backgroundColors[secondaryType]}>
                {formatString(secondaryType)}
              </Type>
            )}
          </span>
        </Info>
        <ImgWrapper>
          <img src={imgUrl || secondaryImgUrl} alt={name} />
        </ImgWrapper>
        <Main>
          <Header style={{ paddingTop: '0.5rem' }}>
            <SectionButton
              onClick={() => setSection(0)}
              isactive={section === 0 ? 'y' : 'n'}
            >
              About
            </SectionButton>
            <SectionButton
              onClick={() => setSection(1)}
              isactive={section === 1 ? 'y' : 'n'}
            >
              Stats
            </SectionButton>
          </Header>
          {section === 0 && (
            <Section>
              <span>{description}</span>
              {pokemon && (
                <div
                  style={{
                    background: `${backgroundColors[type]}`,
                    borderRadius: '0.5rem',
                    padding: '1rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <Metrics>
                    <span>Height</span>
                    <span>{pokemon.height / 10}m</span>
                  </Metrics>
                  <Metrics>
                    <span>Weight</span>
                    <span>{pokemon.weight / 10}kg</span>
                  </Metrics>
                </div>
              )}
            </Section>
          )}
          {section === 1 && (
            <Section>
              {pokemon?.stats.map((stat, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span>
                    {stat.stat.name.includes('special')
                      ? stat.stat.name
                          .replace('-', ' ')
                          .replace('special', 'Sp.')
                          .replace('attack', 'Atk')
                          .replace('defense', 'Def')
                      : formatString(stat.stat.name)}
                  </span>
                  <StatBarWrapper>
                    <StatBar
                      style={{
                        background: `${
                          type !== 'dark' ? backgroundColors[type] : '#808080'
                        }`,
                      }}
                      w={`calc(${stat.base_stat}% * 0.5)`}
                      animation={'y'}
                    />
                    <StatBar w="100%" />
                  </StatBarWrapper>
                </div>
              ))}
            </Section>
          )}
        </Main>
      </Container>
    </Modal>
  )
}
