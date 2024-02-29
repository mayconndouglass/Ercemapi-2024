import { styled } from "styled-components"

export const Container = styled.section`
  padding: 0 2.5rem 7.5rem;
  
  & > div {
    margin-bottom: 5rem;
    
    img {
      width: 120px;
      /* height: 180px; */
      object-fit: contain;
    }

    h2 {
      margin: 5rem 0;
    }

    .holding {
      img {
        display: block;
        margin: 0 auto;
        width: 90px;
      }
    }
    .organizations {
      display: flex;
      justify-content: center;
      gap: 8rem;

      & > img:nth-child(2) {
        width: 90px;
      }
    }

    .institutional-support {
      img {
        display: block;
        margin: 0 auto;
        width: 200px;
      }
    }

    @media screen and (max-width: 1024px) {
      .organizations {
        gap: 4rem;
      }
    }

    @media screen and (max-width: 450px) {
      .holding {
        img {
          width: 70px;
        }
      }

      .organizations {
        gap: 2rem;

        & > img:nth-child(2) {
        width: 70px;
       }
      }

      .institutional-support {
        img {
          width: 150px;
        }
      }
    }

    @media screen and (max-width: 350px) {
      .organizations {
        flex-direction: column;
        align-items: center;
      }
    }
  }

  @media screen and (max-width: 450px) {
    & > div {
      h2 {
        margin: 2.5rem 0;
      }
    }
  }
`