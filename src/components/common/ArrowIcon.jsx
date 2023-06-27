import { styled, useTheme } from 'styled-components'

const Container = styled.div`
  display: flex;
`

export const ArrowIcon = () => {
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
          d="M0.00112021 16.6098L0.00112021 13.3955C0.00112021 13.2392 0.0513434 13.1109 0.15179 13.0105C0.252236 12.91 0.380584 12.8598 0.536834 12.8598L21.4297 12.8598V9.10978C21.4297 8.87541 21.5357 8.71358 21.7478 8.62429C21.9598 8.53501 22.1551 8.56291 22.3337 8.708L28.7623 14.5674C28.8739 14.679 28.9297 14.8073 28.9297 14.9524C28.9297 15.1087 28.8739 15.2426 28.7623 15.3542L22.3337 21.2805C22.1551 21.4368 21.9598 21.4703 21.7478 21.381C21.5357 21.2805 21.4297 21.1187 21.4297 20.8955V17.1455L0.536834 17.1455C0.380584 17.1455 0.252236 17.0953 0.15179 16.9948C0.0513434 16.8944 0.00112021 16.766 0.00112021 16.6098Z"
          fill={theme.text.primary}
        />
      </svg>
    </Container>
  )
}