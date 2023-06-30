import { styled } from 'styled-components'

export const Container = styled.div`
  @media (min-width: 768px) {
    zoom: 1.5;
  }
  max-width: 40rem;
  border-radius: 1.3rem;
  padding-left: 0.7rem;

  display: flex;
  gap: 1rem;
  transition: all 0.1s;

  &:hover {
    outline: 0.2rem solid ${({ theme }) => theme.text.primary};
  }

  > input {
    all: unset;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.text.primary};

    &::placeholder {
      color: ${({ theme }) => theme.text.primary};
      opacity: 0.75;
    }
  }
`

export const Button = styled.button`
  all: unset;
`
