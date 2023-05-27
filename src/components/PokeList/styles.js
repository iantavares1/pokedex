import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;

  display: grid;
  justify-content: center;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
  gap: 6rem 6rem;
`;
