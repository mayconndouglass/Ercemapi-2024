import styled from "styled-components"

export const Container = styled.footer`
  background-color: ${({ theme }) => theme["blue-400"]};
  padding: 5rem 5rem 1.25rem;

  .principal-information {
    display: flex;
    justify-content: space-between;

    h5 {
      font-size: 1.125rem;
      font-weight: 500;
      line-height: 1.3;
      margin-bottom: 1.25rem;
      color: white;
    }

    p {
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.3;
      color: white;

      margin-bottom: 0.625rem;
    }

    .footer-third-col {
      ul {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        a {
          text-decoration: none;

          li {
            &::before {
            content: "";
            height: 2px;
            width: 0;
            background-color: white;
            position: absolute;
            bottom: -2px;
            right: 0;
            opacity: 0;
            transition: .5s;
            }

            &:hover {
              color: white;
              font-weight: 500;
            }

            &:hover::before {
              width: 100%;
              opacity: 1;
              left: 0;
            }
          }
        }

        li {
          display: inline-block;

          position: relative;

          font-size: 0.875rem;
          font-weight: 400;
          /* line-height: 1.7; */
          color: white;
        }
      }
    }

    .footer-fourth-col {
      width: 200px; //14%;//25%;
      height: 100px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    @media screen and (max-width: 990px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }

    @media screen and (max-width: 520px) {
      display: flex;
      flex-direction: column;
      gap: 2rem;
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
    margin-top: 1.5rem;
    font-size: 0.75rem;
    line-height: 1.7;
    color: white;
    text-align: center;
  }

  @media screen and (max-width: 700px) {
    padding: 5rem 2.5rem 1.25rem;    
  }
`