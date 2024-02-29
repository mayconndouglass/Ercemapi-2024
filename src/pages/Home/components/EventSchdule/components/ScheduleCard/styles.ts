import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  max-width: 235px;//288px;
  min-width: 0;
 
  padding: 1.25rem 0.625rem;
  border-radius: 1.25rem;
  /* background: #fff; */
  /* box-shadow: 0 15px 40px 0 rgba(0,0,0,0.08); */
  box-shadow: 0 15px 20px -10px rgba(0,0,0,.04);
  text-align: center;
  /* transition: .5s ease-in-out; */
  z-index: 1;

  .card-img {
    background: linear-gradient(to right,#f1f6fd,#f0fbfe);
    /* padding: 0.625rem; */
    width: 100px;
    border-radius: 50%;
    margin: auto;
    transform: rotate(20deg);
    /* margin-top: 1.25rem; */

    img {
      transform: rotate(-20deg);

      /* width: 100%; */
      width: 80px;
      height: 80px;
    }
  }

  .card-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.25rem;

    h3 {
      /* font-family: "Roboto", sans sans-serif; */
      font-size: 1.25rem;//1.5rem;
      font-weight: 400;
      color: ${({ theme }) => theme["blue-600"]};
    }

    p { 
      font-size: 0.875rem;//1rem;
      font-weight: 400;
      color: ${({ theme }) => theme["gray-500"]};
      line-height: 1.3;
    }
  }


  &::before {
    content: "";
    height: 100%;
    width: 100%;
    background-color: white;
    border: 1px solid #f0f0f0;
    border-radius: 1.25rem;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    transition: transform .5s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:hover {
    transition: 25s ease-in-out;
    box-shadow: 0 20px 20px -10px rgba(0, 0, 0, .1);
  }

  &:hover::before {
    transform: scale(1.1);
    transition: transform .5s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  @media screen and (max-width: 950px){
    .card-img {
      width: 70px;
      margin: 0 auto;

      img {
        width: 60px;
        height: 60px
      }
    }

    .card-content {
      gap: 0.5rem;
      padding: 1rem 0;

      h3 {
        font-size: 1rem;
      }
    }
  }
`