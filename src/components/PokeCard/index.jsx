import { useState } from 'react'

import * as S from './styles'

import { PokeInfo } from '../PokeInfo'

import { bgColors } from '../../utils/bgColors'
import { typeIcons } from '../../utils/typeIcons'
import { formatString } from '../../utils/formatString'
import { formatId } from '../../utils/formatId'

export const PokeCard = ({ name, id, type, type2, imgUrl, imgUrl2 }) => {
  const info = { name, id, type, type2, imgUrl, imgUrl2 }
  const [isOpen, setIsOpen] = useState(false)

  const handlePokeInfo = () => setIsOpen(!isOpen)

  const TypeIcon = typeIcons[type]

  return (
    <>
      <S.Wrapper onClick={handlePokeInfo}>
        <S.Img src={imgUrl || imgUrl2} />
        <S.Container style={{ background: bgColors[type] }}>
          <TypeIcon />
          <S.Name>{formatString(name)}</S.Name>
          <S.InfoWrapper>
            <S.Id>{formatId(id)}</S.Id>
            <S.Types>
              <span>{formatString(type)}</span>
              {type2 && <span>{formatString(type2)}</span>}
            </S.Types>
          </S.InfoWrapper>
        </S.Container>
      </S.Wrapper>
      {isOpen && <PokeInfo info={info} isOpen={handlePokeInfo} />}
    </>
  )
}
