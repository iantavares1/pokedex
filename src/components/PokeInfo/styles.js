import { styled } from 'styled-components'

export const Container = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ bg }) => bg};
  animation: get-in 0.2s linear;

  .top-buttons {
    margin: 2rem;
    display: flex;
    justify-content: space-between;
  }

  > :nth-child(2) {
    position: absolute;
    z-index: -1;
    top: -2rem;
    left: -2rem;
    color: white;
    opacity: 0.1;
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
  color: white;
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
      font-size: 1.8rem;
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
  font-size: 1.4rem;
`

export const DetailsWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem;

  background: ${({ theme }) => theme.bg.primary};
  color: ${({ theme }) => theme.text.primary};

  display: flex;
  flex-direction: column;
  border-radius: 3rem;

  .buttons {
    border: solid 0.1rem red;

    display: flex;

    .button-wrapper {
      position: relative;
      width: calc(100% / 3);
      padding-bottom: 0.7rem;

      display: flex;
      justify-content: center;
      align-items: center;

      .bar {
        position: absolute;
        bottom: 0;

        width: 3rem;
        height: 0.4rem;
        border-radius: 0.2rem;
        background: ${({ theme }) => theme.text.primary};
      }
    }
  }
`

export const DetailButton = styled.button`
  all: unset;
  color: ${({ theme }) => theme.text.primary};
  opacity: 0.8;
  position: relative;
  line-height: 2.4rem;

  ${({ active }) =>
    active &&
    `
    font-weight: bold;
    border-bottom: .5rem solid;
  `}
`

export const Details = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  .metrics {
    padding: 2rem 4rem;
    background-color: ${({ theme }) => theme.bg.primary};
    box-shadow: 1rem 1rem 0.7rem -0.7rem rgba(0, 0, 0, 0.52);
    border-radius: 1.3rem;

    display: flex;
    gap: 4rem;

    div {
      display: flex;
      flex-direction: column;
    }
  }
`
