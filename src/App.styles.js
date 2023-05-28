import { styled } from "styled-components";

export const Container = styled.div`
  width: 90vw;

  padding: 2.5rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 3.5rem;

  color: white;

  > header {
    width: 100%;

    padding: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 2.5rem;
  }

  > main {
    width: 100%;

    display: flex;
    justify-content: center;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  a {
    all: unset;
  }

  & > :nth-child(2),
  & > a :nth-child(1) {
    font-size: 3.5rem;
    cursor: pointer;
  }
`;
