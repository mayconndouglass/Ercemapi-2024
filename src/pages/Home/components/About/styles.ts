import styled from "styled-components"

export const Container = styled.section`
  padding: 0 5rem 7.5rem;

  @media screen and (max-width: 700px) {
    padding: 0 2.5rem 7.5rem;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    gap: 6rem;

    @media screen and (max-width: 1024px) {
      gap: 4rem;
    }

    @media screen and (max-width: 950px) {
      flex-direction: column;
      gap: 0rem;
    }

    .content {
      width: 50%;
      
      h3 {
        font-weight: 700;
        font-size: 1.5rem;
        color: ${({ theme }) => theme["yellow-primary"]};
        line-height: 1.2;
        letter-spacing: -1px;
        margin-bottom: 0.5rem;
        padding-bottom: 0.5rem;
      }

      p {
        /* color: ${({ theme }) => theme["blue-600"]}; */
        color: #042471;
        font-size: 1rem;
        padding-bottom: 1rem;
        margin-bottom: 1rem;
        line-height: 26px;

        text-indent: 2rem;
        text-align: justify;

        span {
          font-weight: 700;
        }
      }

      @media screen and (max-width: 950px) {
        width: 100%;
      }
    }

    .image {
      width: 50%;
      margin-top: 3rem;

      @media screen and (max-width: 950px) {
        width: 100%;
        margin-top: 0;
      }
      
      img {
        width: 100%;//522px;
        height: 30vh;//400px;//530px;
        object-fit: cover;

        @media screen and (max-width: 1250px) { 
          height: 40vh;
        }

        @media screen and (max-width: 1250px) { 
          height: 50vh;
        }

        @media screen and (max-width: 700px) {
          height: 30vh;
        }
      }

      .info-container {
        & > div {
          display: flex;
          justify-content: center;
          gap: 68px;

          margin: 2rem 0 0.8rem;

          .icon {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            
            span {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 3rem;//4rem;
              height: 3rem;//4rem;
              border-radius: 8rem;
              background-color: ${({ theme }) => theme["yellow-primary"]};
              
              svg {
                color: white;
                font-size: 1.5rem;//2rem;//2.5rem;
              }
            }

            & > p {
              font-family: "Poppins";
              font-size: 0.875rem;
              color: #777;
              margin-bottom: 0.5rem;//1rem;
              line-height: 1;
              font-weight: 400;
            }
          }

          p {
            font-size: 1.2rem;
            font-weight: 700;
            line-height: 1.3;
            color: #042471;
          }

          @media screen and (max-width: 500px) {
            flex-direction: column;
            gap: 2rem;
          }
        }

        p {
          font-size: 1rem;
          line-height: 1.2;
          color: #042471;
          /* margin-top: 1rem; */
          text-align: center;
        }
      }
    }
  }
`