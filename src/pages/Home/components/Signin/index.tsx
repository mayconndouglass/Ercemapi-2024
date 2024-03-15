import * as S from "./styles"

import { AnimatedButton } from "../../../../components/AnimatedButton"
import { Center } from "../../../../components/Center"

export const Signin = () => {
  return (
    <S.Container>
      <Center>
        <div className="content">
          <p>Faça sua inscrição como voluntário(a)</p>
          <p>para a ERCEMAPI 2024!</p>

          <a href="https://forms.gle/pTV3zrGszY7FbFb37" target="_blank" rel="noopener noreferrer">
            <AnimatedButton
              $background="white"
              title="SEJA UM VOLUNTÁRIO"
              $padding={{ vertical: 0.5, horizontal: 1 }}
              color='#023E61'
            />
          </a>
        </div>
      </Center>
    </S.Container >
  )
}