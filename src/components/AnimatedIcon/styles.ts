import { styled } from 'styled-components'

export const Container = styled.div<{ color: string }>`
  display: inline-block;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    color: ${props => props.color};
    font-size: 1.25rem;
    font-weight: ${props => props.theme['font-w-egular']};

    position: relative;
    transition: 0.3s;

    z-index: 1;

    &::before {
      content: "";
      height: 35px;
      width: 35px;

      background-color: white;
      border-radius: 50%;

      transform: scale(0);
      position: absolute;
      z-index: -1;
      transition: 0.3s;
    }

    &:hover {
      color: ${({ theme }) => theme['blue-600']};
      cursor: pointer;

      &::before {
        transform: scale(1);
        z-index: -1;
      }
    }
  }
`
