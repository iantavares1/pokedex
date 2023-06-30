import { styled } from 'styled-components'

export const Container = styled.div`
  padding: 2.3rem 0;
  width: 90vw;

  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  @media (min-width: 768px) {
    gap: 2.2rem;
  }
`

export const Header = styled.div`
  @media (min-width: 768px) {
    zoom: 1.5;
  }
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
