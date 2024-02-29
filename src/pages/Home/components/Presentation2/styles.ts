import styled from "styled-components"
import background1 from "../../../../assets/background1.png"
import background2 from "../../../../assets/background2.png"
import background3 from "../../../../assets/background3.png"
import background4 from "../../../../assets/background4.png"

export const Container = styled.section`
  padding: 0 5rem;
  width: 100%;
  height: 80vh;
  
  max-width: 1320px; //TODO: Verificar a necessidade
  margin: 0 auto;
  
  background-image: url("${background1}"), url("${background1}"), url("${background2}"), url("${background3}"), url("${background4}");
  background-position: 10px 10px, bottom 190px right 10px, left 55% top -1px, left 45% bottom -1px, center bottom -1px;
  background-repeat: no-repeat;
  background-color: ${props => props.theme["blue-400"]};

  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    width: 50%;
    margin-top: -15vh;

    display: flex;
    flex-direction: column;
    align-items: center;


    .logo {
      width: 400px;//300px;
      margin-left: -40px;
    
      img {
        width: 100%;
        object-fit: contain;
      }
    }

    .date {
      margin-top: -40px;
      z-index: 1;

      span {
        display: inline-block;
        margin-top: 5px;
        position: relative;
        
        font-size: 1.4rem;
        font-weight: 500;
        color: white;

        &::after {
          content: "";
          position: absolute;
          width: 100%;
          bottom: 1px;
          left: 0;
          height: 6px;
          background: #FFB000;
          z-index: -1;
        }
      }
    }

    h1 {
      margin-top: 20px;
      font-size: 40px;

      font-weight: 600;
      line-height: 1;
      color: white;
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
        padding: 0.8rem 2rem; //1rem 2.375rem;
        position: relative;
        outline: none;
        box-shadow: 0 16px 32px 0 rgba(103, 103, 103, .06);
        border-radius: 25px;
        z-index: 1;
      }

      .second-button {
        display: inline-block;
        background-color: #0052A1;
        border: 2px solid white;
        transition: all .3s ease-in-out;
        color: white;
        font-weight: 500;

        &:hover {
          cursor: pointer;
          color: #02447E;
          border-color: white;
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

          background-color: white;
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

  .other {
    width: 50%;
  }
`