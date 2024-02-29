import styled from "styled-components"

export const Container = styled.section`
  padding: 0 5rem 7.5rem;

  h2 {
    margin-bottom: 2.5rem;
  }

  h3 {
    color: #404040;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.5;
    text-align: center;
  }

  .content-about {
    display: flex;
    gap: 4rem;
    margin: 2.5rem auto 0;

    p {
      color: #404040;
      /* color: ${props => props.theme["gray-500"]}; */
      /* color: ${props => props.theme["gray-900"]}; */
      line-height: 1.7;
      text-align: justify;
    }

    @media screen and (max-width: 1024px) {
      gap: 2rem;
    }

    @media screen and (max-width: 1024px) {
      flex-direction: column;
      text-indent:  50px;
    }
  }
  
  @media screen and (max-width: 700px) {
    padding: 0 2.5rem 7.5rem;
  }
`