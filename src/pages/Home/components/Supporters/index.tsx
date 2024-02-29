import { Title } from "../../../../components/Title"
import * as S from "./styles"
import { Center } from "../../../../components/Center"

import sbc from "../../../../assets/3.png"
import ifpi from "../../../../assets/1.png"
import uespi from "../../../../assets/2.png"
import ufdpar from "../../../../assets/4.png"
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
            <img src={ifpi} alt="IFPI" />
            <img src={uespi} alt="Uespi" />
            <img src={ufdpar} alt="UFDPAR" />
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