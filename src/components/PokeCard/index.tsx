import { useState } from 'react'

import { Container, Img, Wrapper, Info } from './styles'

import { PokemonProps } from '../../types/pokemon/PokemonProps'

import { backgroundColors } from '../../utils/pokemon/backgroundColors'
import { formatString } from '../../utils/functions/formatString'
import { formatId } from '../../utils/functions/formatId'

import { PokeInfo } from '../PokeInfo'
import { PokeBall } from '../common/PokeBall'

export const PokeCard = (props: PokemonProps) => {
  const { id, name, type, secondaryType, imgUrl, secondaryImgUrl } = props

  const [pokeInfoIsOpen, setPokeInfoIsOpen] = useState(false)

  return (
    <>
      <Container
        role="listitem"
        bg={backgroundColors[type]}
        onClick={() => setPokeInfoIsOpen(true)}
      >
        <Img src={imgUrl || secondaryImgUrl} alt={name} />
        <Wrapper>
          <PokeBall
            style={{
              position: 'absolute',
              top: '-2rem',
              left: '-2.5rem',
              width: '150%',
              height: '150%',
              opacity: 0.1,
            }}
          />
          <Info>
            <span style={{ fontSize: '1.5rem' }}>{formatString(name)}</span>
            <span>{formatId(id)}</span>
            <span className="type-wrapper">
              <span>{formatString(type)}</span>
              {secondaryType && <span>{formatString(secondaryType)}</span>}
            </span>
          </Info>
        </Wrapper>
      </Container>
      <PokeInfo
        open={pokeInfoIsOpen}
        onClose={() => setPokeInfoIsOpen(false)}
        pokemonInfo={props}
      />
    </>
  )
}
