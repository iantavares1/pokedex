import { styled, useTheme } from 'styled-components'

const Container = styled.div`
  display: flex;
`

export const ClearIcon = () => {
  const theme = useTheme()
  return (
    <Container>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.9975 17.6487L6.94813 25.6981L4.29688 23.0469L12.3463 14.9975L4.29688 6.94813L6.94813 4.29688L14.9975 12.3463L23.0469 4.29688L25.6981 6.94813L17.6487 14.9975L25.6981 23.0469L23.0469 25.6981L14.9975 17.6487Z"
          fill={theme.text.primary}
        />
      </svg>
    </Container>
  )
}
