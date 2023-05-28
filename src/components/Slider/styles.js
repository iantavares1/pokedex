import { styled } from "styled-components";

export const Container = styled.div`
  width: 95%;

  display: flex;
  gap: 1rem;

  overflow-x: scroll;
`;

export const Wrapper = styled.span`
  padding: 0.8rem 1rem;
  margin-top: 0.2rem;

  font-size: 1.5rem;
  font-weight: 600;

  border-radius: 3rem;
  background: ${({ background }) => background};

  display: flex;
  align-items: center;
  gap: 0.3rem;
`;
