import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme["blue-primary"]};
  /* border-radius: 10px */
`