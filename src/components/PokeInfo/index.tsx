import { useState } from 'react'

import { usePokeInfo } from './usePokeInfo'

import { PokemonProps } from '../../types/pokemon/PokemonProps'

import { Modal } from '@mui/material'
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

import { backgroundColors } from '../../utils/pokemon/backgroundColors'
import { formatString } from '../../utils/functions/formatString'
import { formatId } from '../../utils/functions/formatId'

type PokeInfoProps = {
  onOpen: React.Dispatch<React.SetStateAction<boolean>>
  pokemonInfo: PokemonProps
}

export const PokeInfo = ({ onOpen, pokemonInfo }: PokeInfoProps) => {
  const { name, id, type, imgUrl, secondaryImgUrl, secondaryType } = pokemonInfo
  const { favorites, updateFavorites, description, pokemon } = usePokeInfo(
    name,
    id,
  )
  const [section, setSection] = useState(0)

  return (
    <Modal open>
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
