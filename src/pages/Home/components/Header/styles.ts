import styled, { css } from 'styled-components'

export const Container = styled.header<{ $menuIsOpen: boolean, }>`
  padding: 0 5rem;
  width: 100%;
  position: fixed;
  color: white;
  background-color: #0052A1;
  z-index: 5;

  @media screen and (max-width: 700px) {
    padding: 0.5rem 2.5rem;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
    padding: 0.5rem 0;
    
    /* position: absolute; */
    /* top: 0;
    left: 0; */

    
  }

  .logo {
    width: 250px;//200px;

    img {
      width: 100%;
      object-fit: contain;
    }
  }

  nav {
    ul {
      display: flex;
      align-items: center;
      gap: 2rem;
      
      li {
        cursor: pointer;
        font-weight: 500;

        &:hover a::before {
          width: 100%;
          opacity: 1;
        }

        a {
          text-decoration: none;
          color: white;
          font-weight: ${props => props.theme['font-w-bold']};
          font-size: 1rem;
          position: relative;

          &::before {
            content: "";
            height: 2px;
            width: 0;
            background-color: white;
            position: absolute;
            bottom: -5px;
            left: 0;
            opacity: 0;
            transition: .5s;
          }
        }
      }
    }
  }

  .hamburger {
    display: none;

    svg {
      font-size: 2rem;
    }

    &:hover {
      cursor: pointer;
    }

    @media screen and (max-width: 990px) {
      display: flex;
      gap: 20px;
    }

    @media screen and (max-width: 450px) {
      & > div:first-child {
        display: none;
      }

      svg {
        font-size: 1.5rem;
      }
    }
  }

  .overlay {
    display: ${props => props.$menuIsOpen ? 'block' : 'none'};
    height: 100vh;
    width: 100%;
    background-color: rgba(0,0,0,.6);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 6;
    transition: .3s;
  }

  @media screen and (max-width: 1024px) {
    .logo {
      width: 200px;
    }
  }

  @media screen and (max-width: 990px) {
    & > div {
      & > nav {
        display: none;
      }
    }
  }

  @media screen and (max-width: 350px) {
    .logo {
      width: 150px;
    }
  }
`

export const SideBar = styled.div<{ $menuIsOpen: boolean }>`
  display: none;
  z-index: 5;

  background-color: white;

  @media screen and (max-width: 990px) {
    display: block;
  }

  position: fixed;
  top: 0;
  bottom: 0;
  width: 250px;
  z-index: 10;
  transition: all .3s ease-in-out;
  padding: 20px 30px 10px;

  right: -250px;
  visibility: hidden;
  opacity: 0;

  ${props => props.$menuIsOpen ? css`
    right: 0;
    visibility: visible;
    opacity: 1;
  `: ''}

  .side-bar-header {
    display: flex;
    justify-content: end;
    align-items: center;
    margin-bottom: 2rem;

    img {
      width: 100px;
    }

    .close-menu {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${props => props.theme['blue-400']};
      border-radius: 100%;
      width:30px;
      height: 30px;
      /* color: ${props => props.theme['blue-400']}; */

      &:hover {
        cursor: pointer;
        background-color: ${props => props.theme['blue-600']};
      }
    }
  }

  .list-menu {
    nav {
      ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;

        li {
          a {
            text-decoration: none;
            position: relative;
            font-size: 1rem;
            text-transform: capitalize;
            color: ${props => props.theme['gray-500']};
            font-weight: ${props => props.theme['font-w-bold']};
            padding: 0.3125rem 0;
            display: block;
            transition: all 0.3s ease-in-out;
            z-index: 1;

            &:hover {
              color: ${props => props.theme['blue-400']};
            }
          }
        }
      }
    }
  }
`
