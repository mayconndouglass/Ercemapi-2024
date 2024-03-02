import styled from "styled-components"

export const Container = styled.section<{ $openModal: boolean }>`
  padding: 0 5rem 7.5rem;

  & > div {

    h2 {
      margin-bottom: 5rem;
    }
  }

  .video-container {
    margin: 0 auto;
    width: 90%;
    height: 60vh;//220px;
    border: 5px solid #fff;
    box-shadow: 0 5px 15px rgba(0,0,0,0.7);
    overflow: hidden;
    cursor: pointer;

    position: relative;

    iframe, img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 8rem;
      color: #0052A1;
      z-index: 2;
    }

    @media screen and (max-width: 1080px) {
      width: 100%;
      height: 50vh;
    }

    @media screen and (max-width: 800px) {
      height: 350px;//40vh;
    }

    @media screen and (max-width: 580px) {
      height: 250px;//30vh;

      svg {
        font-size: 5rem;
      }
    }

    @media screen and (max-width: 450px) {
      height: 180px;//25vh;
    }

    @media screen and (max-width: 350px) {
      height: 140px//18vh;
    }
  }

  @keyframes scaleUp {
    to {
        opacity: initial;
        transform: initial;
    } 
  }

  @keyframes scaleDown {
  to {
    opacity: 0;
    transform: scale(0.8);
  }
}

  .modal-video {
    display: ${props => props.$openModal ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background: rgba(0,0,0,0.8);
    width: 100%;
    height: 100%;

    opacity: 0;
    transform: scale(0.8);

    animation: ${({ $openModal }) =>
    $openModal ? 'scaleUp .3s forwards' : 'scaleDown .3s forwards'};

    h2 {
      color: white;
      font-size: 32px;
    }

    iframe {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      display: block;//Não sei se isso aqui é necessário
      max-width: 95%;
      max-height: 95%;
      object-fit: contain;
      border: 3px solid #fff;

      width: 70vw;
      height: 70vh;

      transition: transform 30s ease-in-out;

      @media screen and (max-width: 1380px) {
        width: 80%;
      }

      @media screen and (max-width: 1024px) {
        height: 450px;//50vh;
      }

      @media screen and (max-width: 800px) {
        height: 380px;//40vh;
      }

      @media screen and (max-width: 600px) {
        height: 280px;//30vh;
      }

      @media screen and (max-width: 420px) {
        height: 200px;//25vh;
      }

      @media screen and (max-width: 350px) {
        height: 180px;//18vh;
      }
    }

    span {
      cursor: pointer;
      position: absolute;
      top: 5px;
      right: 20px;
      font-size: 50px;
      font-weight: 500;
      z-index: 100;
      color: #fff;
      user-select: none;
    }
  }

  @media screen and (max-width: 700px) {
    padding: 0 2.5rem 7.5rem;

    & > div {
      h2 {
        margin-bottom: 2.5rem;
      }
    }
  }
`
