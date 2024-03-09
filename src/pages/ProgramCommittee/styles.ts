import styled from "styled-components"

export const Container = styled.section`
  padding: 2.5rem 5rem 7.5rem;

  @media screen and (max-width: 700px) {
    padding: 2.5rem 2.5rem 7.5rem;
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

    .committee-names {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      row-gap: 1.5rem;
      column-gap: 1rem;

      @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
      }

      .name {
        h5 {
          color: ${({ theme }) => theme["blue-600"]};
          font-size: 1rem;
          font-weight: 500;
          line-height: 1.7;

          @media screen and (max-width: 400px) {
            font-size: 0.875rem;
          }
        }

        p {
          color: ${({ theme }) => theme["gray-500"]};
          font-size: 0.875rem;
          font-weight: 400;
          line-height: 1.7;

          @media screen and (max-width: 400px) {
            font-size: 0.75rem;
          }
        }
      }
    }
  }
`