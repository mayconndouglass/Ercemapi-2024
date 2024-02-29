import { styled } from "styled-components";

export const Container = styled.section`
  margin-bottom: 5rem;
  background-color: ${({ theme }) => theme["blue-400"]};
  display: flex;
  justify-content: center;
  align-items: center;

  height: 400px;
`