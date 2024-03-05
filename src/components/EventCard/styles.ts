import styled from "styled-components"
import image from "../../assets/card-background1.avif"

export const Container = styled.div`
  display: inline-block;
  padding: 3.5rem;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme["blue-600"]};
  position: relative;
  color: ${({ theme }) => theme["blue-600"]};
  font-size: 1.125rem;
  background-image: none;
  
  
  margin-bottom: 1.875rem;
  border-radius: 6px;
  transition:  all ease 0.7s;
  background-color: white;

  width: 250px;
  text-align: center;

  h5 {
    position: relative;
    z-index: 1;
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
    background: ${props => props.theme.white};
    z-index: 4;

    width: 60px;
    height: 40px;
    fill: ${({ theme }) => theme["blue-600"]};
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
    z-index: 0  ;
    opacity: 0;
    visibility: hidden;
    background-color: ${({ theme }) => theme["blue-400"]};

    transition:  all ease 0.5s;
  }

  &::before {
    content: "";
    height: 100%;
    width: 90%;
    
    border-radius: 8px;
    border: 3px solid ${({ theme }) => theme["blue-600"]};
    border: 2px solid #f1f1f1;
    
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: -1;
    visibility: hidden;
    opacity: 0;
    transition: all .3s ease-in-out;
  }

  &:hover {
    box-shadow: 0px 16px 32px 0 rgba(0, 0, 0, 0.1);
    background-image: url(${image});
    background-repeat: no-repeat;
    background-size: cover;
    transition: all ease 0.3s;
    color: white;
    background-color: none;

    svg {
      /* top: -40px; */
      background: transparent;
      transition:  all ease 0.5s;
      transform: translateY(-8px);
      opacity: 0;
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
    transition:  all ease 0.5s;
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