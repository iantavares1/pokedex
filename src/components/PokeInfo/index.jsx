import { useState, useEffect } from 'react'

import * as S from './styles'

import { bgColors } from '../../utils/bgColors'
import { BackIcon } from '../common/BackIcon'
import { formatString } from '../../utils/formatString'
import { fetchPokemon } from '../../api/fetchPokemon'
import { formatId } from '../../utils/formatId'
import { typeIcons } from '../../utils/typeIcons'

export const PokeInfo = ({ info, isOpen }) => {
  const { name, id, type, type2, imgUrl, imgUrl2 } = info
  const [pokemon, setPokemon] = useState({})

  const TypeIcon = typeIcons[type]
  const TypeIcon2 = typeIcons[type2]

  const handleClosePokeInfo = () => {
    isOpen(false)
  }

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const response = await fetchPokemon(name)
        setPokemon(response)
      } catch (error) {
        console.log(`error: ${error}`)
      }
    }
    getPokemon()
  }, [isOpen, name])

  return (
    <>
      {info ? (
        <S.Container bg={bgColors[type]}>
          <S.Button onClick={handleClosePokeInfo}>
            <BackIcon />
          </S.Button>
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
          <S.Details>{pokemon && ''}</S.Details>
        </S.Container>
      ) : (
        ''
      )}
    </>
  )
}
