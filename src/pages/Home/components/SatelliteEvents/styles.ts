import styled from "styled-components"

export const Container = styled.section`
  margin-bottom: 7.5rem;
  padding: 5rem;
  background-color: ${({ theme }) => theme["blue-400"]};

  .container-events-cards {
    padding-top: 5rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    /* flex-wrap: wrap; */

    & > div {
      background-color: initial;
      border: 2px solid white;

      h5 {
        color: white;
      }

     /*  svg {
        fill: white;
        background-color: ${({ theme }) => theme["blue-400"]};
      } */
    }

    & > div:first-child {
      svg {
        height: 35px;
      }
    }

    @media screen and (max-width: 1024px) {
      justify-content: space-between;
    }

    @media screen and (max-width: 600px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-content: center;
    }

    @media screen and (max-width: 450px) {
      grid-template-columns: repeat(1, 1fr);
      justify-items: center;
    }
  }

  @media screen and (max-width: 700px) {
    padding: 5rem 2.5rem;
  }
`