import { styled, useTheme } from 'styled-components'

const Container = styled.div`
  display: flex;
`

export const ArrowIcon2 = ({ fill }) => {
  const theme = useTheme()
  return (
    <Container>
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22 9.625H5.225L12.925 1.925L11 0L0 11L11 22L12.925 20.075L5.225 12.375H22V9.625Z"
          fill={fill || theme.text.primary}
        />
      </svg>
    </Container>
  )
}
