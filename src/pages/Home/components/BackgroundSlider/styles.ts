import { styled } from "styled-components"

export const Container = styled.section<{ img: string }>`
  & > div {
    .background {
      width: 100%;
      height: 100vh;

      background-image: url(
        ${props => props.img}
      );
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
`
