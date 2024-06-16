import { useRef } from "react"

const OFFSET_WIDTH = 300

export function useSlider() {
  const sliderRef = useRef<HTMLDivElement>(null)

  const handleSlideToPrevious = () => {
    const slider = sliderRef.current

    if (slider) {
      slider.scrollLeft += -OFFSET_WIDTH
    }
  }

  const handleSlideToNext = () => {
    const slider = sliderRef.current

    if (slider) {
      slider.scrollLeft += OFFSET_WIDTH
    }
  }

  return { sliderRef, handleSlideToPrevious, handleSlideToNext }
}
