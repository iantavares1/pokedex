import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;

  @media (min-width: 812px) {
    width: 35rem;
  }

  .search-icon {
    font-size: 3.5rem;
    position: absolute;
    top: 50%;
    right: 3%;
    transform: translateY(-50%);

    @media (min-width: 392px) {
      font-size: 4rem;
    }
  }
`;

export const Input = styled.input`
  width: 100%;

  border: none;
  background: none;

  font-size: 2rem;
  color: white;

  padding: 1rem 2rem;
  border-radius: 1.5rem;

  transition: all 0.1s;

  @media (min-width: 392px) {
    font-size: 3rem;
  }

  &:hover,
  &:focus {
    outline: solid 0.3rem;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;
