import * as S from "./styles"

import { Title } from "../../../../components/Title"
import { Center } from "../../../../components/Center"

import sbc from "../../../../assets/3.png"
import ifpi2 from "../../../../assets/IFPI3.png"
import uespi from "../../../../assets/2.png"
import ufdpar2 from "../../../../assets/Design sem nome (1).png"
import deltaTics from "../../../../assets/deltaTics.png"

export const Supporters = () => {
  return (
    <S.Container>
      <Center>
        <div className="holding ">
          <Title align="center" text="Realização" />
          <img src={sbc} alt="Sbc" />
        </div>

        <div className="organization">
          <Title align="center" text="Organização" />

          <div className="organizations">
            <div className="ifpi">
              <img src={ifpi2} alt="IFPI" />
            </div>

            <div className="uespi">
              <img src={uespi} alt="Uespi" />
            </div>

            <div className="ufdpar">
              <img src={ufdpar2} alt="UFDPAR" />
            </div>
          </div>
        </div>

        <div className="institutional-support">
          <Title text="Apoio Institucional" align="center" />

          <img src={deltaTics} alt="Delta Tics" />
        </div>
      </Center>
    </S.Container>
  )
}