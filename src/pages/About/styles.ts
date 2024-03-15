import styled from "styled-components"

export const Container = styled.section<{ $openModal: boolean }>`
  padding: 2.5rem 5rem 7.5rem;
  max-width: 1900px;
  margin: 0 auto;

  @media screen and (max-width: 700px) {
    padding: 2.5rem 2.5rem 5rem;
  }
  
  & > div {
    .line {
      width: 100%;
      height: 1px;
      background-color: ${({ theme }) => theme["gray-500"]};
      opacity: 0.2;
      margin: 4rem 0;

      @media screen and (max-width: 700px) {
        margin: 2rem 0;
      }
    }

    .content {
      p {
        text-indent: 4rem;
        text-align: justify;
        font-size: 1rem;
        font-weight: 400;
        line-height: 26px;
        margin-bottom: 1rem;
        color: #292930;
      }
    }

    .images {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;

      margin-top: 5rem;

      .image {
        width: 100%;
        border: 5px solid #fff;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        overflow: hidden;
        cursor: pointer;
      }

      img {
        width: 100%;
        object-fit: cover;
        transition: transform .8s cubic-bezier(0.165, 0.84, 0.44, 1);
        border-radius: 8px;
        /* transition: .10s linear; */

        &:hover {
          transform: scale(1.2);
          transition: transform .8s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
      }

      @media screen and (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media screen and (max-width: 512px) {
        grid-template-columns: 1fr;
      }
    }

    .popup-img {
      position: fixed;
      top: 0;
      left: 0;
      background-color: rgba(0,0,0,0.9);
      width: 100%;
      height: 100%;
      z-index: 100;

      display: ${props => props.$openModal ? 'flex' : 'none'};
      align-items: center;
      justify-content: center;


      img {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 60%;//50vw;
        border-radius: 8px;
        transform: translate(-50%, -50%);

        @media screen and (max-width: 1320px) {
          width: 70%;
        }

        @media screen and (max-width: 700px) {
          width: 80%;
        }

        @media screen and (max-width: 500px) {
          width: 90%;
        }
      }

      span {
        position: absolute;
        top: 20px;
        right: 40px;
        font-size: 40px;
        color: white;
        font-weight: 500;
        cursor: pointer;
        z-index: 100;
      }
    }
  }
`