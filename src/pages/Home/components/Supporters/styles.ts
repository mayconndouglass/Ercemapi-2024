import { styled } from "styled-components"

export const Container = styled.section`
  padding: 0 5rem 7.5rem;

  @media screen and (max-width: 700px) {
    padding: 0 2.5rem 7.5rem;
  }
  
  & > div {
    h2 {
      margin-bottom: 5rem;
    }

    .holding {
      margin-bottom: 5rem;

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

      margin-bottom: 5rem;

      img {
        width: 100%;
        object-fit: contain;
      }
    }

    .institutional-support {
      img {
        display: block;
        margin: 0 auto;
        width: 250px;//200px;
      }

      .institucional-support-logos {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8rem;
        row-gap: 1rem;
      
        & > a:nth-child(2) img {
          width: 180px;
        }

        & > a:last-child img {
          width: 200px;
        }
      }
    }

    @media screen and (max-width: 1090px) {
      .organizations, .institutional-support > .institucional-support-logos {
        gap: 4rem;
      }
    }

    @media screen and (max-width: 900px) {
      .organizations {
        display: grid;
        grid-template-columns: repeat(2, 150px);
        justify-items: center;
        row-gap: 2rem;
      }

      .institutional-support {
        img {
          width: 200px;//200px;
        }

        .institucional-support-logos {
          & > a:nth-child(2) img {
            width: 130px;
          }

          & > a:last-child img {
            width: 150px;
          }
        }
      }
    }

    @media screen and (max-width: 800px) {
      .institucional-support-logos {
        flex-wrap: wrap;
        
      }
    }

    @media screen and (max-width: 700px) {
      .holding {
        img {
          width: 70px;
        }
      }
    }

    @media screen and (max-width: 500px) {
      .organizations {
        display: grid;
        grid-template-columns: repeat(2, 120px);
        justify-items: center;
        row-gap: 2rem;

        .uespi{
          img {
            height: 100px;
          }
        }
      }

      .institutional-support {
        img {
          width: 150px;//200px;
        }

        .institucional-support-logos {
          row-gap: 1rem;

          & > a:nth-child(2) img {
            width: 90px;
          }

          & > a:last-child img {
            width: 130px;
          }
        }
      }
    }

    @media screen and (max-width: 450px) {
      .organizations {
        gap: 2rem;
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

      .holding {
        h2 {
          margin: 0 0 2.5rem;
        }
      }
    }
  }
`