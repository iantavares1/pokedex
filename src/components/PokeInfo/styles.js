import { styled } from 'styled-components'

export const Container = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ bg }) => bg};
  color: ${({ theme }) => theme.text.primary};
  animation: get-in 0.2s linear;

  > :nth-child(1) {
    margin: 2rem 0 0 2rem;
  }
  > :nth-child(2) {
    position: absolute;
    z-index: -1;
    top: -2rem;
    left: -2rem;
    opacity: 0.2;
    width: 40rem;
    height: 40rem;
    pointer-events: none;
  }

  @keyframes get-in {
    from {
      right: -100vw;
    }
    to {
      right: 0;
    }
  }
  @keyframes get-out {
    from {
      right: 0;
    }
    to {
      right: -100vw;
    }
  }
`

export const Button = styled.button`
  all: unset;
  display: flex;
`

export const Main = styled.div`
  position: relative;
  padding: 1rem 2rem;
  height: 45vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  .top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 3.2rem;
    }

    span {
      font-size: 1.8;
      font-weight: 600;
    }
  }
  .types-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`

export const Img = styled.img`
  position: absolute;
  width: 20rem;
  height: 20rem;
  bottom: -2rem;
  left: 50%;
  transform: translateX(-50%);
`

export const Type = styled.div`
  background: ${({ bg }) => bg};
  border-radius: 1.3rem;
  padding: 0.4rem 1rem;
  width: fit-content;
  display: flex;
  gap: 0.3rem;
  align-items: center;
  font-size: 14px;
`

export const Details = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.bg.primary};
  display: flex;
  flex-direction: column;
  border-radius: 3rem;

  > button {
    all: unset;
  }
`

export const Detail = styled.div``
