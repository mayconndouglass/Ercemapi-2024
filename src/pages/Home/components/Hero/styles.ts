import styled from "styled-components"

export const Container = styled.section<{ backgroundImg: string }>`
  display: flex;
  align-items: center;
  max-width: 1910px;
  margin: 0 auto;

  padding: 0 5rem 0;
  background-image: url(
    ${props => props.backgroundImg}
  );
  transition: background-image .5s ease;
  background-repeat: no-repeat;
  background-size: cover;
  /* background-color: ${({ theme }) => theme["blue-400"]}; */
  /* position: relative; */
  height: 100vh;//calc(100vh - 100px);
  margin-bottom: 10rem;
  position: relative;
  
  @media screen and (max-width: 650px) {
    padding: 0 2.5rem 0;
    height: 70vh;
    margin-bottom: 5rem;
  }

  &:before {
    content: ' ';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    background: #212529;
    opacity: 0;
    pointer-events: none;
    transition: ease opacity 300ms 100ms;

    background: linear-gradient(180deg, rgba(182, 124, 28, 1) 0%, rgba(6, 35, 112, 1) 50%);
    opacity: 0.7;
  }

  & > span {
    position: absolute;
    bottom: -15%;//-100%;
    left: 0;
    width: 100%;
    height: 15%;//100%;
    background-color: white;
    transform: skewY(-5deg);
    transform-origin: top left;
    /* padding: 7.5rem; */
  }
  
  & > div {
    /* height: 100vh; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
      font-size: 1.75rem;
      color: white;
      background-color: ${({ theme }) => theme["blue-600"]};
      border-radius: 50rem;
      padding: 0.5rem 1.5rem;
      margin-bottom: 1rem;
      z-index: 1;
    }

    h1 {
      font-weight: 800;
      line-height: 1.2;
      font-size: 5rem;//5.25rem;
      text-align: center;
      color: ${({ theme }) => theme["pink-400"]};
      margin-bottom: 1.5rem;
      z-index: 1;
    }

    p {
      font-weight: 300;
      color: white;
      line-height: 1.2;
      font-size: 2.3rem;
      margin-bottom: 1rem;
      text-align: center;
      z-index: 1;
    }

    & > div {
      button {
        font-size: 1rem;
      }
    }

    @media screen and (max-width: 850px) {
      span {
        font-size: 1.25rem;
      }

      h1 {
        font-size: 4rem;
      }

      p {
        font-size: 1.8rem;
      }

      & > div {
        button {
          font-size: 0.8rem;
        }
      }
    }

    @media screen and (max-width: 650px) {
      span {
        font-size: 1rem;
      }

      h1 {
        font-size: 3rem;
      }

      p {
        font-size: 1.25rem;
      }

      & > div {
        button {
          padding: 1rem 1.8rem;
        }
      }
    }

    @media screen and (max-width: 530px) {
      h1 {
        font-size: 2rem;
      }

      p {
        font-size: 1rem;
      }

      & > div {
        button {
          padding: 0.8rem 1.2rem;
        }
      }
    }

    @media screen and (max-width: 350px) {
      h1 {
        font-size: 1.5rem;
      }
    }
  }
`