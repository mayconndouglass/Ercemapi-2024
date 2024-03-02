import { styled } from "styled-components"

export const Container = styled.footer`
  background-color: ${({ theme }) => theme["blue-400"]};
  
  & > div {
    padding: 3rem 5rem 0;

    @media screen and (max-width: 700px) {
      padding: 3rem 2.5rem 0;
    }

    .first-row {
      display: flex;
      justify-content: space-between;
      gap: 2rem;
      color: white;

      @media screen and (max-width: 752px) {
        flex-direction: column;
        gap: 3rem;

        .logos {
          order: 3;
        }

        .contact {
          order: 2;
        }
      }

      a {
        color: white;
        text-decoration: none;
      }

      .logos {
        width: 280px;

        @media screen and (max-width: 900px) {
          width: 200px;
        }

        img {
          width: 100%;
        }
      }

      .contact {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        & > div, & > div a {
          display: flex;
          align-items: center;
          gap: 1rem;

          font-size: 14px;
          line-height: 1.3;

          svg {
            color: ${({ theme }) => theme["yellow-primary"]};
            font-size: 17px;
          }
        }
      }

      .menu {
        ul {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          
          li {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            font-size: 14px;
            line-height: 1.3;

            svg {
              color: ${({ theme }) => theme["yellow-primary"]};
              font-size: 13px;
            }

            a {
              position: relative;
              left: 0;
              transition: ease-in-out .1s;

              &:hover {
                /* padding-left: 2rem; */
                left: .5rem;
                transition: ease-in-out .1s;
              }
            }
          }
        }
      }
    }

    .footer-line {
      width: 100%;
      height: 1px;
      background-color: white;
      opacity: 0.2;
      margin-top: 1.875rem;
    }

    .all-rights {
      margin: 2.5rem 0 1.25rem;
      text-align: center;

      margin-top: 1.5rem;
      font-size: 0.75rem;
      line-height: 1.7;
      color: white;
    }
  }

  .yellow {
    background-color: ${({ theme }) => theme["yellow-primary"]};
    height: 10px;
    width: 100%;
    padding: 0;
  }
`