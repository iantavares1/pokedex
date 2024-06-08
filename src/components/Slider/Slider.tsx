"use client"

import { useRef } from "react"

import { formatString, pokemonTypes } from "@/utils"

type SliderProps = {
  onSelect: (awawd: string) => void
}

export function Slider({ onSelect }: SliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null)

  const handleSlider = (direction: "previous" | "next") => {
    const slider = sliderRef.current

    if (slider) {
      const width = 300
      const scrollAmount = direction === "next" ? width : -width
      slider.scrollLeft += scrollAmount
    }
  }

  return (
    <div className="slider mx-2 my-3 flex w-full select-none items-center gap-4">
      <button
        className="slider-button"
        onClick={() => handleSlider("previous")}
      >
        <img
          className="min-h-10 min-w-10"
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

      <button className="slider-button" onClick={() => handleSlider("next")}>
        <img className="min-h-10 min-w-10" src="arrow-right.svg" alt="Next" />
      </button>
    </div>
  )
}
