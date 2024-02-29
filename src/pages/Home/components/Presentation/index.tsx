import * as S from "./styles"

import { Center } from "../../../../components/Center"
import { AnimatedButton } from "../../../../components/AnimatedButton"

import parnaibaVideo from "../../../../assets/parnaiba.mp4"
import enucompi from "../../../../assets/Logo ENUCOMPI.png"
import element from "../../../../assets/with-blue.jpg"

export const Presentation = () => {
  return (
    <Center>
      <S.Container>
        <div className="content">
          <div className="logo-ercemapi">
            <img src={enucompi} alt="Encermapi logo" />
          </div>
          <div className="date">
            <span>11 a 13 de Setembro de 2024</span>
          </div>

          <h1>Industria 5.0 e o<br /> Futuro do Trabalho</h1>

          <div className="buttons">
            <AnimatedButton
              $background="#0052A1"
              title="INSCREVA-SE"
              $padding={{ vertical: 1, horizontal: 2.375 }}
              color='white'
            />
            <button className="second-button">LOCAL DO EVENTO</button>
          </div>
        </div>

        <div className="video-container">
          <video src={parnaibaVideo} autoPlay loop muted></video>
          <img src={element} alt="Parnaíba" />
        </div>
      </S.Container>
    </Center>
  )
}