import { useRef } from 'react'

import styled from '@emotion/styled'

import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from '@mui/icons-material'

import PokemonType from '../../types/pokemon/PokemonType'

import { backgroundColors } from '../../utils/pokemon/backgroundColors'
import { formatString } from '../../utils/functions/formatString'

const Container = styled.div`
  margin: 0.8rem 0 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  user-select: none;

  button {
    all: unset;
    cursor: pointer;
  }

  & > button:first-of-type,
  & > button:last-of-type {
    display: none;
  }

  @media (min-width: 768px) {
    & > button:first-of-type,
    & > button:last-of-type {
      display: block;
    }
  }
`

const SliderBar = styled.div`
  display: flex;
  gap: 1.2rem;

  overflow: scroll;
  scroll-behavior: smooth;

  @media (min-width: 768px) {
    overflow: hidden;
  }
`

const TypeSpan = styled.span`
  padding: 0.2rem 1.4rem;
  border-radius: 99rem;
  font-size: 1rem;
  color: white;
  display: flex;
  cursor: pointer;
`

type SliderProps = {
  onSelect: React.Dispatch<React.SetStateAction<string>>
}

export const Slider = ({ onSelect }: SliderProps) => {
  const sliderRef = useRef<HTMLDivElement>(null)

  const handleSlider = (direction: 'previous' | 'next') => {
    const slider = sliderRef.current

    if (slider) {
      const width = 300
      const scrollAmount = direction === 'next' ? width : -width
      slider.scrollLeft += scrollAmount
    }
  }

  return (
    <Container role="slider">
      <button onClick={() => handleSlider('previous')}>
        <ArrowBackIosNewOutlined sx={{ fontSize: 30 }} />
      </button>

      <SliderBar ref={sliderRef}>
        {Object.keys(backgroundColors).map((key) => (
          <TypeSpan
            role="listitem"
            key={key}
            onClick={() => onSelect(key)}
            style={{
              background: `${backgroundColors[key as PokemonType]}`,
            }}
          >
            {formatString(key)}
          </TypeSpan>
        ))}
      </SliderBar>

      <button onClick={() => handleSlider('next')}>
        <ArrowForwardIosOutlined sx={{ fontSize: 30 }} />
      </button>
    </Container>
  )
}
