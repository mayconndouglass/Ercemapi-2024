import styled from "styled-components";


export const Container = styled.section`
  padding: 2.5rem 5rem 7.5rem;
  max-width: 1900px;
  margin: 0 auto;

  @media screen and (max-width: 990px) {
    padding: 2.5rem 2.5rem 7.5rem;
  }

  & > div {
    h2 {
      margin-bottom: 5rem;

      @media screen and (max-width: 990px) {
        margin-bottom: 2.5rem;
      }
    }

    .organizers-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;

      @media screen and (max-width: 990px) {
        grid-template-columns: 1fr;
      }

      .organizer {
        display: flex;
        gap: 2rem;
        padding: 1rem;
        position: relative;
        border-radius: 8px;

        .img {
          div {
            width: 100px;
            height: 120px;
            border-radius: 8px;
            background-color: #EEEDF2;
          }
        }

        img {
          width: 100px;
          height: 120px;
          border-radius: 8px;
          object-fit: cover;
        }

        .content {
          align-self: flex-end;

          h5 {
            font-size: 1rem;
            font-weight: 500;
            color: #1c1c1c;
            color: ${({ theme }) => theme["blue-600"]};
            margin-bottom: 5px;
            transition: .5s;
          }

          p {
            transition: .5s;
            font-size: 0.875rem;
            color: #777;
            margin-bottom: -5px;
          }

          span {
            transition: .5s;
            color: ${({ theme }) => theme["blue-600"]};
            font-size: 0.75rem;
          }

          &::after {
            position: absolute;
            content: "";
            top: 4rem;
            right: 3rem;
            bottom: 0;
            left: 0;
            border-radius: 10px;
            background: #fff;
            box-shadow: 0 0 45px rgba(0,0,0,.1);
            transition: .5s;
            z-index: -1;
          }

          @media screen and (max-width: 1260px) {
            &::after {
              right: 0;
              top: 3rem;
            }
          }

          @media screen and (max-width: 990px) {
            &::after {
              right: 0;
              top: 4rem;
            }
          }

          @media screen and (max-width: 580px) {
            &::after {
              top: 3rem;
            }
          }
        }

        &:hover {
         .content {
          h5, p, span {
            color: white;
          }

          p, span {
            opacity: 0.8;
          }

          &::after {
            background-color: ${({ theme }) => theme["blue-400"]};
          } 
         }
        }

        @media screen and (max-width: 470px) {
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 1rem;

          .content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            align-self: initial;

            h5 {
              font-size: 0.875rem;
              text-align: center;
            }

            p {
              margin-bottom: 0;
            }

            &::after {
              top: 5rem;
            }
          }
        }
      }
    }
  }
`
