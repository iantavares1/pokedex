import { styled } from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 11rem;
`

export const Container = styled.div`
  position: relative;

  padding-top: 5.3rem;
  width: 100%;
  height: 100%;

  background: ${({ bg }) => bg};
  border-radius: 1.3rem;
  color: white;
  box-shadow: 1rem 1rem 0.7rem -0.7rem rgba(0, 0, 0, 0.52);

  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;
  overflow: hidden;

  > :nth-child(1) {
    position: absolute;
    top: -2rem;
    right: -1rem;
    width: 14rem;
    height: 14rem;
    opacity: 0.1;
  }
`

export const Img = styled.img`
  width: 9rem;
  height: 9rem;
  position: absolute;
  z-index: 2;
  top: -3.5rem;
  left: 50%;
  transform: translateX(-50%);
`

export const Name = styled.h1`
  font-size: 1.6rem;
`

export const InfoWrapper = styled.span`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
`

export const Id = styled.h2`
  font-size: 0.8rem;
`

export const Types = styled.div`
  display: flex;
  gap: 0.4rem;

  > span {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 1.3rem;

    padding: 0.3rem 0.5rem;
    font-size: 0.8rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`
