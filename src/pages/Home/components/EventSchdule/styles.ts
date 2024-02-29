import styled from "styled-components";

export const Container = styled.section`
  padding: 0 5rem 7.5rem;

  .container-schedule {
    display: flex;
    justify-content: center;

    margin-top: 2.5rem;//5rem;
    position: relative;
    padding: 2.5rem 0;

    svg {
      position: absolute;
      width: 100%;
      height: 100%;
      /* overflow: hidden; */
      vertical-align: middle;
      top: 0;
      z-index: 1;

      @media screen and (max-width: 500px) {
        display: none;
      }
    }

    @media screen and (max-width: 450px) {
      padding: 0;
    }
  }

  .container-cards {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3, minmax(1fr, 235px));
    grid-template-rows: repeat(19, 32px);
    column-gap: 1.5rem;
    /* gap: 1.5rem; */

    & > div {
      &:first-child {
        grid-row: 3/11;
      }

      &:nth-child(2) {
        grid-row: 12/20;
      }

      &:nth-child(3) {
        grid-row: 1/9;
      }

      &:nth-child(4) {
        grid-row: 10/18;
      }

      &:nth-child(5) {
        grid-row: 2/10;
      }

      &:nth-child(6) {
        grid-row: 11/19;
      }
      
      @media screen and (max-width: 650px) {
        &:nth-child(5) {
          grid-row: 21/29;
        }

        &:nth-child(6) {
          grid-row: 19/27;
        }
      }

      @media screen and (max-width: 450px) {
        grid-row: initial !important;
      }
    }

    .first-col  {
      margin-top: 4rem;//6.25rem;//9.375rem;
    }

    .third-col {
      margin-top: 2rem;//3.125rem;//4.6875rem;
    }

    .first-col, .second-col, .third-col {
      & > div {
        margin-bottom: 1.875rem;
      }
    }

    @media screen and (max-width: 950px){
      grid-template-rows: repeat(19, 28px);
      column-gap: 1rem;
    }

    @media screen and (max-width: 650px){
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(28, 28px);
    }

    @media screen and (max-width: 450px){
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: initial;
      gap: 2rem
    }
  }

  @media screen and (max-width: 700px){
    padding: 5rem 2.5rem;
  }
`