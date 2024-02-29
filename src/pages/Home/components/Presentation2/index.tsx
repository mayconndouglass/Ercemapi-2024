import * as S from "./styles"

import { AnimatedButton } from "../../../../components/AnimatedButton"

import logoEnucompi from "../../../../assets/enucompi-logo-white.png"
import ilustration from "../../../../assets/5.svg"

export const Presentation2 = () => {
  return (
    <S.Container>
      <div>
        <div className="content">
          <div className="logo">
            <img src={logoEnucompi} alt="Encermapi logo" />
          </div>

          <div className="date">
            <span>11 a 13 de Setembro de 2024</span>
          </div>

          <h1>Industria 5.0 e o<br /> Futuro do Trabalho</h1>

          <div className="buttons">
            <AnimatedButton
              $background="white"
              title="INSCREVA-SE"
              $padding={{ vertical: 1, horizontal: 2.375 }}
              color='#02447E'
            />
            <button className="second-button">LOCAL DO EVENTO</button>
          </div>
        </div>

        <div className="other">
          <img src={ilustration} alt="" />
        </div>
      </div>
    </S.Container >
  )
}