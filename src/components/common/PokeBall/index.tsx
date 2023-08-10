type PokeBallProps = {
  style?: React.CSSProperties
}

export const PokeBall = ({ style }: PokeBallProps) => {
  return (
    <svg
      role="img"
      style={style}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_13_66)">
        <path
          d="M26.64 19.52C25.84 21.8 23.64 23.44 21.08 23.44C18.52 23.44 16.36 21.8 15.52 19.52C11.16 20.16 6.84 21.52 2.72 23.68C4.44 31.64 11.52 37.64 20 37.64C28.84 37.64 36.12 31.16 37.44 22.72C33.92 21.12 30.32 20.08 26.64 19.52Z"
          fill="white"
        />
        <path
          d="M21.12 11.64C23.76 11.64 26 13.36 26.76 15.76C30.44 16.24 34.08 17.24 37.6 18.68C36.92 9.55999 29.32 2.35999 20 2.35999C10.36 2.35999 2.51999 10.12 2.35999 19.72C6.59999 17.72 11 16.4 15.48 15.8C16.24 13.4 18.48 11.64 21.12 11.64Z"
          fill="white"
        />
        <path
          d="M21.12 20.96C22.9978 20.96 24.52 19.4378 24.52 17.56C24.52 15.6822 22.9978 14.16 21.12 14.16C19.2422 14.16 17.72 15.6822 17.72 17.56C17.72 19.4378 19.2422 20.96 21.12 20.96Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_13_66">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
