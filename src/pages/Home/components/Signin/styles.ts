import styled from "styled-components"

export const Container = styled.section`
  margin-bottom: 7.5rem;
  padding: 2.5rem 5rem;
  
 background-color: #0052A1;

  & > div {
    padding-block: 2.5rem;//5rem;

    .content {
      margin: 0 auto;
      font-family: "Poppins";
      font-size: 2rem;
      font-weight: 500;
      color: white;
      border-left: 4px solid white;
      line-height: 1.5;
      padding-left: 5rem;

      button {
        margin-top: 1.25rem;
        line-height: 1.3;
      }
    }

    @media screen and (max-width: 1024px) {
      padding-block: 2.5rem;

      .content {
        font-size: 1.5rem;
      }
    }

    @media screen and (max-width: 600px) {
      .content {
        padding-left: 2.5rem;
        line-height: 1.3;
      }
    }

    @media screen and (max-width: 500px) {
      .content {
        padding-left: 0;
        line-height: 1.3;
        border-left: none;
        text-align: center;
      }

      button {
        margin: 1.25rem auto 0;
      }
    }

    @media screen and (max-width: 380px) {
      .content {
        font-size: 1.2rem;
      }

      button {
        padding: 0.3rem 0.8rem;
      }
    }
  }

  @media screen and (max-width: 750px) {
    background-image: none;
    background-color: #0052A1;
  }

  @media screen and (max-width: 700px) {
    padding: 2.5rem;
  }
`
