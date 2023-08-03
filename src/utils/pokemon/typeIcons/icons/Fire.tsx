import { TypeIconProps } from '../../../../types/pokemon/TypeIconProps'

export const Fire = ({ style }: TypeIconProps) => {
  return (
    <svg
      style={style}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_11_16)">
        <path
          d="M34 24.2675C34 32.055 27.7219 38.3331 20 38.3331C12.2781 38.3331 6 32.0528 6 24.3331C6 20.0551 8.02854 16.5456 9.97906 14.555C11.0706 13.3446 13 14.1102 13 15.6925V21.9269C13 24.4914 15.0395 26.63 17.6054 26.6621C20.2115 26.7029 22.3333 24.5956 22.3333 21.9998C22.3333 15.5831 9.56563 14.991 18.5307 1.7873C19.5151 0.349385 21.75 1.00199 21.75 2.73741C21.6844 10.2602 34 11.9154 34 24.2675Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_11_16">
          <rect
            width="28"
            height="37.3333"
            fill="white"
            transform="translate(6 1)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
