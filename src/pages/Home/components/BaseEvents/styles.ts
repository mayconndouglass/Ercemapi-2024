import styled from "styled-components"

export const Container = styled.section`
  padding: 0 5rem 7.5rem;

  .container-events-cards {
    padding-top: 5rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    /* flex-wrap: wrap; */

    & > div:first-child {
      svg {
        height: 35px;
      }
    }

    & > div:last-child {
      svg {
        height: 32px;
        top: -20px;
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
    padding: 0 2.5rem 7.5rem;
  }
`