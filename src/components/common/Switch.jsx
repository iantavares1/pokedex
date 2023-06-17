import { styled } from 'styled-components'

const Container = styled.div`
  position: relative;
  display: flex;
  background: ${({ theme }) => theme.text.primary};
  border-radius: 1rem;
  width: 4rem;
  height: 0.8rem;
`

const Circle = styled.div`
  position: absolute;
  border-radius: 99.9rem;
  width: 2rem;
  height: 2rem;
  background: ${({ theme }) => theme.text.primary};
  top: 50%;
  left: ${({ left }) => left};
  transform: translateY(-50%);
`

export const Switch = ({ currentTheme }) => {
  return (
    <Container>
      <Circle
        left={currentTheme.title === 'dark' ? '0' : 'calc(100% - 2.0rem)'}
      />
    </Container>
  )
}
