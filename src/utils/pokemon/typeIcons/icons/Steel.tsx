import { TypeIconProps } from '../../../../types/pokemon/TypeIconProps'

export const Steel = ({ style }: TypeIconProps) => {
  return (
    <svg
      style={style}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_13_112)">
        <g clipPath="url(#clip1_13_112)">
          <path
            d="M3.33333 36.6667H36.6667V3.33334L3.33333 36.6667Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_13_112">
          <rect width="40" height="40" fill="white" />
        </clipPath>
        <clipPath id="clip1_13_112">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
