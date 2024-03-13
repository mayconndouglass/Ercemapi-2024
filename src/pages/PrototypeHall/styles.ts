import styled from "styled-components"

export const Container = styled.section`
  padding: 2.5rem 5rem 7.5rem;

  @media screen and (max-width: 700px) {
    padding: 2.5rem 2.5rem 5rem;
  }

  & > div {
    .line {
      width: 100%;
      height: 1px;
      background-color: ${({ theme }) => theme["gray-500"]};
      opacity: 0.2;
      margin: 4rem 0;

      @media screen and (max-width: 700px) {
        margin: 2rem 0;
      }
    }

    .content {
      p {
        text-indent: 4rem;
        text-align: justify;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        margin-bottom: 0.5rem;
        color: #292930;

        span {
          display: block;
          margin-left: 1rem;
        }

        @media screen and (max-width: 500px) {
          text-indent: 2rem;
        }
      }

      & > p:last-child {
        text-indent: 0;
      }

      h6 {
        font-size: 1.2rem;
        font-weight: 500;
        margin: 1.4rem 0;
        color: ${({ theme }) => theme["blue-600"]};

        @media screen and (max-width: 500px) {
          text-align: center;
        }
      }

     ul {
        li {
          margin-left: 1rem;
          margin-bottom: 0.5rem;

          @media screen and (max-width: 500px) {
            margin-left: 0;
          }
        }
      }
    }
  }
`
