import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 5rem;//1.25rem;

  .content {
    width: 40%;
    
    .logo-ercemapi {
      width: 350px;
      display: flex;
      /* justify-content: center; */

      img {
        width: 100%;
        margin-left: -27px;
        object-fit: contain;
      }
    }

    h1 {
      font-size: 30px;

      font-weight: 600;
      line-height: 1;
      color: #023E61;
      /* white-space: nowrap; */
      /* text-align: center; */
    }

    .date {
      display: flex;
      /* justify-content: center; */
    }

    span {
      display: inline-block;
      font-size: 1.125rem;
      /* text-align: center; */
      position: relative;
      margin-top: 5px;

      &::after {
        position: absolute;
        bottom: 4px;
        width: 100%;
        left: 0;
        height: 6px;
        background: #FFB000;
        content: "";
        z-index: -1;
      }
    }

    .buttons {
      display: flex;
      justify-content: center;
      gap: 15px;
      margin-top: 30px;

      button {
        /* line-height: 1.3; */
        font-weight: 500;
        font-size: 0.875rem;
        padding: 1rem 2.375rem;
        position: relative;
        outline: none;
        box-shadow: 0 16px 32px 0 rgba(103, 103, 103, .06);
        border-radius: 25px;
        z-index: 1;
      }

      .second-button {
        display: inline-block;
        background-color: white;
        border: 2px solid #0052A1;
        transition: all .3s ease-in-out;

        &:hover {
          cursor: pointer;
          color: white;
          border-color: #0052A1;
        }

        &::before {
          content: "";
          height: 100%;
          width: 100%;
          border-radius: 25px;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: -1;

          background-color: #0052A1;
          opacity: 0;
          visibility: hidden;
          transform: scale(.8);
          transition: .3s;
        }

        &:hover::before {
          visibility: visible;
          opacity: 1;
          transform: scale(1.025);
        }
      }
    }
  }

  .video-container {
    position: relative;

    width: 715px;
    height: 450px;
    
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;

      mix-blend-mode: screen;
    }

    video {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`