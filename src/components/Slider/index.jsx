import { useRef } from 'react'

import * as S from './styles'

import { bgColors } from '../../utils/bgColors'
import { formatString } from '../../utils/formatString'
import { ArrowIcon3 } from '../common/ArrowIcon3'

export const Slider = ({ onChoice }) => {
  const sliderRef = useRef(null)

  const getType = (e) => {
    onChoice(e.target.innerHTML)
  }

  const handleSlider = (direction) => {
    const slider = sliderRef.current

    if (slider) {
      const width = 300
      const scrollAmount = direction === 'next' ? width : -width
      slider.scrollLeft += scrollAmount
    }
  }

  return (
    <S.Container>
      <S.Button onClick={() => handleSlider('previous')}>
        <ArrowIcon3 direction="l" />
      </S.Button>

      <S.Slider ref={sliderRef}>
        {Object.keys(bgColors).map((type) => (
          <S.TypeButton
            key={type}
            style={{ background: `${bgColors[type]}` }}
            onClick={getType}
          >
            {formatString(type)}
          </S.TypeButton>
        ))}
      </S.Slider>

      <S.Button onClick={() => handleSlider('next')}>
        <ArrowIcon3 direction="r" />
      </S.Button>
    </S.Container>
  )
}
