"use client"

import { PokemonTypeName } from "@/types"
import { formatString, pokemonTypes } from "@/utils"
import { useSlider } from "./hooks"

type SliderProps = {
  onSelect: (type: PokemonTypeName) => void
}

export function Slider({ onSelect }: SliderProps) {
  const { sliderRef, handleSlideToPrevious, handleSlideToNext } = useSlider()

  return (
    <div className="slider mx-2 my-3 flex w-full select-none items-center gap-4">
      <button className="slider-button" onClick={handleSlideToPrevious}>
        <img
          className="min-h-12 min-w-12"
          src="arrow-left.svg"
          alt="Previous"
        />
      </button>

      <div
        ref={sliderRef}
        className="slider-bar flex gap-4 overflow-x-scroll scroll-smooth"
      >
        {pokemonTypes.map((key) => (
          <div
            key={key}
            className={`${key}-background text-md semibold flex cursor-pointer rounded-full px-6 py-1 font-medium`}
            onClick={() => onSelect(key)}
          >
            {formatString(key)}
          </div>
        ))}
      </div>

      <button className="slider-button" onClick={handleSlideToNext}>
        <img className="min-h-12 min-w-12" src="arrow-right.svg" alt="Next" />
      </button>
    </div>
  )
}
