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
  overflow: hidden;

  @media (min-width: 768px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    zoom: 0.5;
    width: 90%;
    max-width: 100rem;
    height: 50rem;
    border-radius: 2rem;
    display: grid;
    grid-template-columns: 39rem 1fr;
    grid-template-rows: auto auto;
  }

  @media (min-width: 1440px) {
    zoom: 0.6;
  }

  &::-webkit-scrollbar {
    width: 1rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scrollbar.primary};
    border-radius: 0.5rem;
  }

  .top-buttons {
    margin: 2rem;
    display: flex;
    justify-content: space-between;
    @media (min-width: 768px) {
      zoom: 1.4;
      max-width: 35rem;
    }
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
  cursor: pointer;
`

export const Main = styled.div`
  position: relative;
  padding: 1rem 2rem;
  height: 23rem;
  display: flex;
  color: white;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  @media (min-width: 768px) {
    margin-left: 2rem;

    grid-column: 1/2;
    width: 35rem;
    height: auto;
    padding: 20rem 0 0 0;
    align-items: center;
  }

  .top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 768px) {
      flex-direction: column;
      zoom: 1.2;
    }

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
    @media (min-width: 768px) {
      flex-direction: row;
      zoom: 1.2;
      gap: 0.8rem;
    }
  }
`

export const Img = styled.img`
  position: absolute;
  width: 20rem;
  height: 20rem;
  bottom: -2rem;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;

  @media (min-width: 768px) {
    width: 30rem;
    height: 30rem;
    bottom: 16rem;
  }
`

export const Img2 = styled.img`
  position: absolute;
  top: -3rem;
  left: 50%;
  transform: translateX(-50%);
  width: 7rem;
  height: 7rem;
  pointer-events: none;

  @media (min-width: 425px) {
    width: 9rem;
    height: 9rem;
  }

  @media (min-width: 768px) {
    width: 13rem;
    height: 13rem;
  }
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
  width: 100vw;
  height: calc(100vh - 23rem);
  padding: 2rem 3rem 3rem;

  background: ${({ theme }) => theme.bg.primary};
  color: ${({ theme }) => theme.text.primary};

  display: flex;
  flex-direction: column;
  border-top-right-radius: 3rem;
  border-top-left-radius: 3rem;

  @media (min-width: 768px) {
    grid-column: 2/3;
    grid-row: 1/3;
    width: auto;
    height: 100%;
    border-radius: 0;
    padding-top: 2.7rem;
  }

  .buttons {
    display: flex;
    justify-content: space-between;

    @media (min-width: 768px) {
      zoom: 1.5;
      justify-content: space-around;
    }

    .button-wrapper {
      position: relative;
      width: calc(100% / 3);
      padding-bottom: 0.7rem;

      display: flex;
      justify-content: center;
      align-items: center;

      @media (min-width: 768px) {
        width: auto;
      }

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

  .about {
    @media (min-width: 768px) {
      padding: 3rem 0;
      gap: 5rem;
    }
    .description {
      font-size: 1.2rem;
      line-height: 140%;
      @media (min-width: 768px) {
        font-size: 2rem;
      }
    }
  }

  .stats {
    @media (min-width: 768px) {
      padding-top: 2rem;
      zoom: 1.4;
      gap: 2.5rem;
    }
    .stat {
      width: 100%;
      display: flex;
      justify-content: space-between;
      font-size: 1.2rem;
      line-height: 140%;

      @media (min-width: 910px) {
        font-size: 1.5rem;
      }

      .stat-wrapper {
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.5rem;

        .bar-wrapper {
          margin-left: 1.5rem;
          position: relative;
          border-radius: 1rem;
          overflow: hidden;

          width: 70%;
          height: 0.6rem;

          @media (min-width: 910px) {
            height: 1rem;
          }
        }
      }
    }
  }

  .evolution {
    position: relative;
    margin-top: 1rem;
    gap: 3.5rem;

    @media (min-width: 425px) {
      padding: 0 3rem;
      gap: 2rem;
    }

    @media (min-width: 768px) {
      margin-top: 4rem;
      gap: 5rem;
    }

    .evolution-wrapper {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 3rem;
      font-size: 1.4rem;

      @media (min-width: 768px) {
        font-size: 2rem;
        & > :nth-child(2) {
          margin-top: 2rem;
          zoom: 1.3;
        }
      }

      .has-multiple {
        @media (min-width: 768px) {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }

    .pokemon-wrapper {
      width: 8rem;
      position: relative;
      padding-top: 3.8rem;
      padding-left: 0.5rem;
      text-align: center;

      @media (min-width: 425px) {
        padding-top: 6rem;
      }

      @media (min-width: 768px) {
        padding-top: 10rem;
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
  cursor: pointer;

  ${({ isactive }) =>
    isactive === 'y' &&
    `
    font-weight: bold;
    border-bottom: .3rem solid;
  `}
`

export const Detail = styled.div`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`

export const Metrics = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  background: ${({ bg }) => bg};
  border-radius: 1.3rem;
  color: white;
  font-weight: 600;

  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    zoom: 1.4;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  strong {
    font-size: 1.8rem;
  }
`

export const StatBar = styled.div`
  position: absolute;
  height: 100%;
  width: calc(${({ w }) => w});
  background: ${({ theme }) => theme.bg.secondary};

  ${({ animation }) =>
    animation === 'y'
      ? `
    animation: bar-animation 0.6s linear;
  `
      : `opacity: 0.1;`}

  @keyframes bar-animation {
    from {
      width: 0;
    }
    to {
      ${({ w }) => w};
    }
  }
`

export const Select = styled.div`
  position: absolute;
  z-index: 998;
  background: ${({ theme }) => theme.bg.primary};
  top: -5rem;
  right: -1rem;
  width: 10rem;
  height: 18rem;
  padding-top: 3rem;
  box-shadow: 1rem 1rem 1rem -1rem rgba(0, 0, 0, 0.76);
  border-radius: 5px;
  display: none;
  flex-direction: column;
  margin-top: 3rem;
  align-items: center;
  gap: 2rem;
  overflow: hidden scroll;

  @media (min-width: 768px) {
    width: 15rem;
    height: 30rem;
    padding-top: 6rem;
  }

  div {
    display: flex;
    flex-direction: column;
    position: relative;

    span {
      position: absolute;
      top: 4rem;
      @media (min-width: 768px) {
        top: 10rem;
      }
    }
  }

  img {
    position: relative;
  }
`
