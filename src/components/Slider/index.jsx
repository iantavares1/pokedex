import * as S from './styles'

import { bgColors } from '../../utils/bgColors'
import { formatString } from '../../utils/formatString'
import { NextPreviousIcon } from '../common/NextPrevious'

export const Slider = ({ onChoice }) => {
  const getType = (e) => {
    onChoice(e.target.innerHTML)
    console.log(e.target.innerHTML)
  }

  return (
    <S.Container>
      <NextPreviousIcon />
      {Object.keys(bgColors).map((type) => (
        <S.TypeButton
          key={type}
          style={{ background: `${bgColors[type]}` }}
          onClick={getType}
        >
          {formatString(type)}
        </S.TypeButton>
      ))}
      <NextPreviousIcon />
    </S.Container>
  )
}
