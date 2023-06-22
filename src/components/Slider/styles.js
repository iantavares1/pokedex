import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 0.8rem;
  overflow-x: scroll;
`

export const TypeButton = styled.button`
  all: unset;
  padding: 0.2rem 1.5rem;
  border-radius: 1.3rem;
  cursor: pointer;

  > span {
    color: white;
  }
`
