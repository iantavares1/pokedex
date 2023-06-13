import * as S from './styles'

import { bgColors } from '../../utils/bgColors'
import { formatString } from '../../utils/formatString'

export const Slider = ({ onChoice }) => {
  const getType = (e) => onChoice(e.target.innerHTML)

  return (
    <S.Container>
      {Object.keys(bgColors).map((type) => (
        <S.TypeButton
          key={type}
          style={{ background: `${bgColors[type]}` }}
          onClick={getType}
        >
          <span>{formatString(type)}</span>
        </S.TypeButton>
      ))}
    </S.Container>
  )
}
