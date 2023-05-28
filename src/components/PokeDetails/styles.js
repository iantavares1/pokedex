import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;

  width: 100vw;
  height: 90vh;

  padding: 3rem 0;

  position: fixed;
  z-index: 999;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: rgba(0, 0, 0, 0.8);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.6rem;
    background: ${({ background }) => background};
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }
`;

export const Main = styled.div`
  width: 100%;
  position: relative;

  padding-top: 17rem;

  cursor: pointer;

  .img-wrapper {
    position: absolute;

    top: -7rem;
    left: 50%;
    transform: translateX(-50%);

    width: 23rem;
    height: 24rem;

    pointer-events: none;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const Info = styled.div`
  color: white;

  display: grid;
  place-items: center;
  gap: 0.3rem;

  .name {
    font-size: 3rem;
  }

  .id {
    font-size: 1.5rem;
    font-weight: 600;
  }
  .type {
    display: flex;
    gap: 1rem;

    span {
      padding: 0.6rem 0.8rem;
      margin-top: 0.2rem;

      font-size: 1rem;
      font-weight: 600;

      border-radius: 1.5rem;
      background-color: rgba(0, 0, 0, 0.2);

      display: flex;
      align-items: center;
      gap: 0.3rem;
    }
  }
`;

export const Details = styled.div`
  padding: 0 1rem 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 90%;
  height: 100%;

  .wrapper {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
  }
`;

export const Stats = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  .name {
    font-size: 1.5rem;
  }

  .value {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

export const Bar = styled.div`
  width: 100%;
  position: relative;

  height: 1rem;

  border-radius: 1rem;
  overflow: hidden;

  .bar {
    height: 100%;
    position: absolute;

    top: 50%;
    left: 0;
    transform: translateY(-50%);

    z-index: 999;
  }

  .bar-bg {
    width: 100%;
    position: absolute;

    height: 100%;
    width: 100%;

    background-color: rgba(116, 116, 116, 0.5);
  }
`;
