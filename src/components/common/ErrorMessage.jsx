import { styled } from 'styled-components'

const Container = styled.div`
  padding: 2rem;
  margin-top: 4rem;
  display: flex;
  text-align: center;
  color: ${({ theme }) => theme.text.primary};
  flex-direction: column;
`

export const ErrorMessage = ({ message }) => {
  return (
    <Container>
      <span>
        <h1>{message}</h1>
      </span>
    </Container>
  )
}
