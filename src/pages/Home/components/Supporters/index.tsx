import * as S from "./styles"

import { Title } from "../../../../components/Title"
import { Center } from "../../../../components/Center"

import sbc from "../../../../assets/3.png"

import ifpi2 from "../../../../assets/IFPI3.png"
import uespi from "../../../../assets/2.png"
import ufdpar2 from "../../../../assets/Design sem nome (1).png"
import ufpi from "../../../../assets/ufpi.png"

import deltaTics from "../../../../assets/Logo DeltaTICs.png"
import tda from "../../../../assets/tda.png"
import studioDesigner from "../../../../assets/studio.png"

export const Supporters = () => {
  return (
    <S.Container>
      <Center>
        <div className="holding ">
          <Title align="center" text="Realização" />
          <a href="https://www.sbc.org.br/" target="_blank" rel="noopener noreferrer">
            <img src={sbc} alt="Sbc" />
          </a>
        </div>

        <div className="organization">
          <Title align="center" text="Organização" />

          <div className="organizations">
            <div className="uespi">
              <a href="https://uespi.br/" target="_blank" rel="noopener noreferrer">
                <img src={uespi} alt="Uespi" />
              </a>
            </div>

            <div className="ufdpar">
              <a href="https://ufdpar.edu.br/" target="_blank" rel="noopener noreferrer">
                <img src={ufdpar2} alt="UFDPAR" />
              </a>
            </div>

            <div className="ufpi">
              <a href="https://ufpi.br/" target="_blank" rel="noopener noreferrer">
                <img src={ufpi} alt="UFPI" />
              </a>
            </div>

            <div className="ifpi">
              <a href="https://www.ifpi.edu.br/" target="_blank" rel="noopener noreferrer">
                <img src={ifpi2} alt="IFPI" />
              </a>
            </div>
          </div>
        </div>

        <div className="institutional-support">
          <Title text="Parceiros" align="center" />

          <div className="institucional-support-logos">
            <a href="https://institutodeltatics.com.br/" target="_blank" rel="noopener noreferrer">
              <img src={deltaTics} alt="Delta Tics" />
            </a>

            <a href="https://tdainformatica.com.br/" target="_blank" rel="noopener noreferrer">
              <img src={tda} alt="Logo TDA Informática" />
            </a>

            <a href="#">
              <img src={studioDesigner} alt="Logo Studio Designer" />
            </a>
          </div>
        </div>
      </Center>
    </S.Container>
  )
}