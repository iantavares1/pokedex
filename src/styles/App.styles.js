import { styled } from 'styled-components'

export const Container = styled.div`
  padding: 2.3rem 0;
  width: 90vw;

  display: flex;
  flex-direction: column;
  gap: 1.3rem;
`

export const Header = styled.div`
  color: ${({ theme }) => theme.text.primary};
  font-size: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 3.6rem;
  }

  button {
    all: unset;
    cursor: pointer;
  }

  > span {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`
