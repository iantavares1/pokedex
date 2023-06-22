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
  pointer-events: none;
`

export const Img2 = styled.img`
  position: absolute;
  top: -3rem;
  left: 50%;
  transform: translateX(-50%);
  width: 7rem;
  height: 7rem;
  pointer-events: none;
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
  height: calc(100% - 45vh);
  padding: 2rem 3rem 3rem;

  background: ${({ theme }) => theme.bg.primary};
  color: ${({ theme }) => theme.text.primary};

  display: flex;
  flex-direction: column;
  border-top-right-radius: 3rem;
  border-top-left-radius: 3rem;

  .buttons {
    display: flex;
    justify-content: space-between;

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

  .about {
    .description {
      font-size: 1.2rem;
      line-height: 140%;
    }
  }

  .stats {
    .stat {
      width: 100%;
      display: flex;
      justify-content: space-between;
      font-size: 1.2rem;
      line-height: 140%;

      .stat-wrapper {
        display: flex;
        align-items: center;

        .bar-wrapper {
          margin-left: 1.5rem;
          position: relative;
          border-radius: 1rem;
          overflow: hidden;

          width: 15rem;
          height: 0.6rem;
        }
      }
    }
  }

  .evolution {
    margin-top: 1rem;
    gap: 3.5rem;

    .evolution-wrapper {
      .pokemon-wrapper {
        position: relative;
        padding-top: 3.8rem;
        padding-left: 0.5rem;
        text-align: center;
      }
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
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
