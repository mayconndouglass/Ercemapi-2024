import styled, { css } from 'styled-components'

export const Container = styled.header<{ $menuIsOpen: boolean, }>`
  padding: 0 5rem;
  width: 100%;
  position: fixed;
  color: ${({ theme }) => theme['blue-600']};
  background-color: white;
  z-index: 5;


  @media screen and (max-width: 990px) {
    padding: .5rem 2.5rem;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
  }

  .logos {
    display: flex;
    gap: 1rem;

    img {
      width: 200px;//250px;
      object-fit: contain;
    }

    & > img:nth-child(2) {
      width: 150px;//200px;
    }

    & > a img:last-child {
      width: 40px;//50px;
    }

    @media screen and (max-width: 1100px) {
      img {
        width: 160px;
      }

      & > img:nth-child(2) {
        width: 110px;
      }

      & > img:last-child {
        width: 35px;
      }
    }

    @media screen and (max-width: 990px) {
      img {
        width: 200px;
      }

      & > img:nth-child(2) {
        width: 150px;
      }

      & > img:last-child {
        width: 50px;
      }
    }

    @media screen and (max-width: 800px) {
      img {
        width: 160px;
      }

      & > img:nth-child(2) {
        width: 110px;
      }

      & > img:last-child {
        width: 35px;
      }
    }

    @media screen and (max-width: 800px) {
      img {
        width: 200px;
      }

      & > img:nth-child(2),  & > img:last-child {
        display: none;
      }
    }

    @media screen and (max-width: 360px) {
      img {
        width: 160px;
      }
    }

    @media screen and (max-width: 320px) {
      img {
        width: 120px;
      }
    }

  }

  .main-nav {
    & > ul {
      display: flex;
      align-items: center;
      gap: 2rem;
      
      & > li {
        position: relative;
        cursor: pointer;
        font-weight: 500;

        padding-block: 2rem;

        &:hover a::before {
          width: 100%;
          opacity: 1;
        }

        & > a {
          text-decoration: none;
          color: ${({ theme }) => theme['blue-600']};
          font-weight: ${props => props.theme['font-w-bold']};
          font-size: 1rem;
          position: relative;

          &::before {
            content: "";
            height: 2px;
            width: 0;
            background-color: ${({ theme }) => theme['blue-600']};
            position: absolute;
            bottom: -5px;
            left: 0;
            opacity: 0;
            transition: .5s;
          }
        }

        ul {
          position: absolute;
          top: 100%;
          left: 0;
          background: #ffffff;
          z-index: -1;
          opacity: 0;
          visibility: hidden;
          min-width: 200px;
          padding: 15px 10px;
          border-radius: 4px;
          box-shadow: 0px 4px 10px rgba(37, 47, 63, 0.1);
          transition: all 0.3s ease-in-out;
          list-style: none;
          pointer-events: none;

          li {
            margin: 0;
            a {
              position: relative;
              font-size: 15px;
              /* text-transform: capitalize; */
              color: ${({ theme }) => theme['gray-900']};
              font-weight: 500;
              padding: 5px 15px;
              border-radius: 4px;
              display: block;
              transition: all 0.3s ease-in-out;
              z-index: 1;
              overflow: hidden;
              text-decoration: none;

              &:hover {
                color: ${({ theme }) => theme['blue-400']};
              }
            }
          }
        }

        &:hover {
          ul {
            top: 90%;
            opacity: 1;
            visibility: visible;
            z-index: 9;
            pointer-events: all;
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

    @media screen and (max-width: 460px) {
      & > div:first-child {
        display: none;
      }

      /* svg {
        font-size: 1.5rem;
      } */
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

export const SideBar = styled.div<{
  $menuIsOpen: boolean
}>`
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

      &:hover {
        cursor: pointer;
        background-color: ${props => props.theme['blue-600']};
      }

      svg {
        color: #fff;
      }
    }
  }

  .list-menu {
    nav {
      ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap:0.5rem;

        li {
          a {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            text-decoration: none;
            position: relative;
            font-size: 1rem;
            /* text-transform: capitalize; */
            color: ${props => props.theme['gray-500']};
            font-weight: ${props => props.theme['font-w-bold']};
            padding: 0.3125rem 0;
            /* display: block; */
            transition: all 0.3s ease-in-out;
            z-index: 1;

            svg {
              font-size: 13px;
            }

            &:hover {
              color: ${props => props.theme['blue-400']};
            }
          }

          ul {
            display: none;
            position: static;
            transform: scaleY(0);
            visibility: hidden;
            opacity: 0;
            min-width: auto;
            box-shadow: none;
            padding: 0;
            transition: initial;
            transition: all .3s ease-in-out;

            li {
              a {
                padding: 5px 1rem;
              }
            }
          }

          .active {
            display: block;
            opacity: 1;
            visibility: visible;
            transition: initial;
            transition: all .3s ease-in-out;
            transform: scaleY(1);
            background-color:red;
          }
        }
      }
    }
  }
`
