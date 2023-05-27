import { styled } from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 30rem;
  position: relative;

  padding-top: 16.5rem;

  border-radius: 3rem;
  box-shadow: 0.5rem 0.6rem 0.5rem 0rem rgba(0, 0, 0, 0.5);

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
`;

export const ModalOverlay = styled.div`
  position: fixed;
  z-index: 995;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.8);

  display: flex;
  justify-content: center;
  align-items: center;
`;
