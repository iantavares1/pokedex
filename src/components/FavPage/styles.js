import { styled } from 'styled-components'

export const Container = styled.div`
  place-content: center;
  padding-top: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
  gap: 4rem 1.4rem;

  @media (min-width: 768px) {
    zoom: 1.8;
  }
`
