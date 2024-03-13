import * as S from "./styles"
import { useEffect, useState } from "react"

import { Center } from "../../../../components/Center"
import { AnimatedButton } from "../../../../components/AnimatedButton"

import { BackgroundImages } from "./data/background-images"

export const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentImage === 4) {
        setCurrentImage(0)
        return
      }

      setCurrentImage(currentImage + 1)
    }, 8000)

    return () => clearTimeout(timer)
  }, [currentImage])

  return (
    <>
      <S.support />

      <S.Container backgroundImg={BackgroundImages[currentImage]}>
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
    </>
  )
}