import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`

export const Slider = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  overflow-x: scroll;
  scroll-behavior: smooth;

  @media (min-width: 768px) {
    overflow: hidden;
  }
`

export const TypeButton = styled.button`
  all: unset;
  height: 2rem;
  padding: 0.2rem 1.5rem;
  border-radius: 1.3rem;
  color: white;
  cursor: pointer;
`

export const Button = styled.button`
  all: unset;
  padding-bottom: 0.15rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`
