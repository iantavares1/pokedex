import { styled } from "styled-components";

export const Container = styled.div`
  width: 90vw;
  height: 90vh;

  padding: 3rem 0 0;

  position: fixed;
  z-index: 996;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: rgba(0, 0, 0, 0.7);

  border-radius: 3rem;
  box-shadow: 0.5rem 0.6rem 0.5rem 0rem rgba(0, 0, 0, 0.5);

  display: flex;
  flex-direction: column;

  .close-button {
    border: solid 1px red;
    position: absolute;

    top: 0;
    right: 0;
  }
`;

export const Main = styled.div`
  width: 100%;
  height: 30rem;
  position: relative;

  padding-top: 16.5rem;

  cursor: pointer;

  .img-wrapper {
    position: absolute;

    top: -5rem;
    left: 50%;
    transform: translateX(-50%);

    width: 22rem;
    height: 22rem;

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
  gap: 0.5rem;

  .name {
    font-size: 4rem;
  }

  .id {
    font-size: 2rem;
    font-weight: 600;
  }
  .type {
    display: flex;
    gap: 1rem;

    span {
      padding: 0.8rem 1rem;
      margin-top: 0.2rem;

      font-size: 1.5rem;
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
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  .wrapper {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
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
    font-size: 2rem;
    font-weight: 600;
  }
`;

export const Bar = styled.div`
  width: 100%;
  position: relative;

  height: 1.5rem;

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
