import styled from "styled-components"

export const Container = styled.div<{
  $backgroundImg: string,
  $color: string
}>`

  display: inline-block;
  padding: 3.5rem;
  border: 2px solid ${props => props.$color === "blue" ? props.theme["blue-600"] : "white"};
  position: relative;

  color: ${props => props.$color === "blue" ? props.theme["blue-600"] : "white"};
  font-size: 1.125rem;
  
  background-image: url(${props => props.$backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  
  margin-bottom: 1.875rem;
  border-radius: 8px;
  transition:  all ease 0.3s;

  width: 250px;
  text-align: center;
  z-index: 1;

  h5 {
    position: relative;
    z-index: 3;
  }

  svg {
    display: block;
    position: absolute;
    top: -22px;//-11px;
    left: 20px;
    padding: 0 0.625rem;

    font-size: 0.875rem;
    font-weight: ${props => props.theme['font-w-medium']};
    line-height: 1.3;
    color: ${props => props.theme['gray-500']};
    background: ${props => props.$color === "blue" ? "white" : props.theme["blue-400"]};
    z-index: 4;

    width: 60px;
    height: 40px;
    fill: ${props => props.$color === "blue" ? props.theme["blue-600"] : "white"};
    transition:  all ease 0.5s;

    opacity: 1;
  }

  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    visibility: visible;
    background-color: ${({ theme }) => theme["blue-400"]};
    background-color: ${props => props.$color === "blue" ? "white" : props.theme["blue-400"]};
    border-radius: 8px;

    transition:  all ease 0.3s;
    z-index: 2;
  }

  &::before {
    /* content: ""; */
    height: 100%;
    width: 90%;
    
    border-radius: 8px;
    border: 2px solid #EDEDED;
    /* border: 2px solid #f1f1f1; */
    
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;

    visibility: hidden;
    opacity: 0;
    transition: all .3s ease-in-out;
    z-index: -1;
  }

  &:hover {
    box-shadow: 0px 16px 32px 0 rgba(0, 0, 0, 0.15);
    color: white;
    transition:  all ease 0.3s;

    svg {
      background: transparent;
      transition:  all ease 0.5s;
      transform: translateY(-16px);
      /* opacity: 0; */
    }
  }

  &:hover::before {
    visibility: visible;
    opacity: 1;
    bottom: -12px;
  }

  &:hover::after {
    visibility: visible;
    opacity: 0.8;
    transition:  all ease 0.3s;

    background-color: ${({ theme }) => theme["blue-400"]};
  }

  @media screen and (max-width: 900px) {
    padding: 3.5rem 1rem;
  }

  @media screen and (max-width: 600px) {
    width: auto;
  }

  @media screen and (max-width: 450px) {
    width: 250px;
  }

  @media screen and (max-width: 340px) {
    width: 100%;
  }
`