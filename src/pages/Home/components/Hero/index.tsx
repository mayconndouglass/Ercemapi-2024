import { AnimatedButton } from "../../../../components/AnimatedButton"
import { Center } from "../../../../components/Center"
import * as S from "./styles"

export const Hero = () => {
  return (
    <S.Container>
      <Center>
        <span >EVENTO HÍBRIDO</span>
        <h1>XII Escola Regional de Computação do Ceará, Maranhão e Piauí</h1>
        <p>Indústria 5.0 e o Futuro do Trabalho</p>

        <AnimatedButton
          $background="#FFB510"
          title="INSCRIÇÕES EM BREVE"
          $padding={{ vertical: 1.25, horizontal: 2.4 }}
          color='white'
        />
      </Center>
      {/* <span></span> */}
    </S.Container>
  )
}