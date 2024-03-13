import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 150px;//50px;
  background-color: ${({ theme }) => theme["blue-primary"]};
  /* border-radius: 10px */

  @media screen and (max-width: 800px) {
    height: calc(50px + 73px);
  }
`