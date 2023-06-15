import { styled } from 'styled-components'

const Container = styled.div`
  position: relative;
  display: flex;
  background: ${({ theme }) => theme.text.primary};
  border-radius: 10px;
  width: 40px;
  height: 8px;
`

const Circle = styled.div`
  position: absolute;
  border-radius: 999px;
  width: 20px;
  height: 20px;
  background: ${({ theme }) => theme.text.primary};
  top: 50%;
  left: ${({ left }) => left};
  transform: translateY(-50%);
`

export const Switch = ({ currentTheme }) => {
  return (
    <Container>
      <Circle
        left={currentTheme.title === 'dark' ? '0' : 'calc(100% - 20px)'}
      />
    </Container>
  )
}
