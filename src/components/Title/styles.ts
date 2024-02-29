import { styled } from "styled-components"

export const Container = styled.h2<{ align: string, $color: string }>`
  font-size: 2rem;//1.8rem;//1.325rem;
  font-weight: 500;
  line-height: 1.7;

  position: relative;
  
  text-align: ${props => props.align === "center" ? "center" : "start"};

  color: ${({ $color }) => $color};

  &::before {
    position: absolute;
    content: "";
    width: ${props => props.align === "center" ? "45px" : "30px"};
    height: 4px;
    bottom: 0;
    /* left: 0; */
    background: ${({ $color }) => $color};

    left: ${props => props.align === "center" ? "50%" : "0px"};
    margin-left: ${props => props.align === "center" ? "-25px" : "0px"};
  }
  
  &::after {
    content: "";
    position: absolute;
    width: ${props => props.align === "center" ? "4px" : "0"};
    height: ${props => props.align === "center" ? "4px" : "0"};
    bottom: 0;
    /* left: 50px; */
    background: ${({ $color }) => $color};

    left: 50%;
    margin-left: 25px
  }

  @media screen and (max-width: 1024px) {
    font-size: 1.5rem;
  }
`