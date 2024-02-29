import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: white;
  border: 1px solid #f1f1f1;
  padding: 2.125rem 1.5rem;
  text-align: center;
  margin-bottom: 30px;
  border-radius: 6px;
  position: relative;
  transition: all .3s ease-in-out;

  width: 224px;

  @media screen and (max-width: 1400px) {
    width: 198px  ;
  }

  @media screen and (max-width: 496px) {
    width: 100%;
  }

  .img {
    margin-bottom: 20px;
    width: 140px;
    
    img {
      width: 100%;
      height: 90px;
      object-fit: contain;
    }
  }

  h6 {
    color:${props => props.theme['blue-600']};
    font-size: 1rem;
    line-height: 26px;
    font-weight: ${props => props.theme['font-w-bold']};
    margin-bottom: 0;
  }

  &::before {
    content: "";
    height: 100%;
    width: 90%;
    border: 1px solid #f1f1f1;
    border-radius: 6px;
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
  }

  &:hover::before {
    visibility: visible;
    opacity: 1;
    bottom: -12px;
  }
`
