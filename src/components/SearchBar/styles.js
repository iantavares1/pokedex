import styled from "@emotion/styled";

export const Container = styled.div`
  border: solid 1px white;

  :hover,
  :focus {
    outline: solid 0.2rem white;
  }

  > input {
    all: unset;
    background-color: red;
    font-size: 1rem;
    color: white;

    padding: 1rem 2rem;
    border-radius: 1.5rem;

    transition: all 0.1s;
  }
`;
