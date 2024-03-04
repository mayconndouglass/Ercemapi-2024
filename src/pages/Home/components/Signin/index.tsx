import * as S from "./styles"

import { AnimatedButton } from "../../../../components/AnimatedButton"
import { Center } from "../../../../components/Center"

export const Signin = () => {
  return (
    <S.Container>
      <Center>
        <div className="content">
          <p>Faça sua inscrição como</p>
          <p>Voluntário(a) para a ERCEMAPI 2024!</p>

          <AnimatedButton
            $background="white"
            title="SEJA UM VOLUNTÁRIO"
            $padding={{ vertical: 0.5, horizontal: 1 }}
            color='#023E61'
          />
        </div>
      </Center>
    </S.Container >
  )
}