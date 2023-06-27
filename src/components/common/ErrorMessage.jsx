import { styled } from 'styled-components'

const Container = styled.div`
  padding: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.text.primary};
`

export const ErrorMessage = ({ message, style }) => {
  return (
    <Container style={style}>
      <span>
        <h1>{message}</h1>
      </span>
    </Container>
  )
}
