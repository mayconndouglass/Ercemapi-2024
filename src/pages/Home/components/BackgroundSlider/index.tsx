import { useEffect, useState } from "react"
import * as S from "./styles"
import { Center } from "../../../../components/Center"

import parnaiba1 from "../../../../assets/parnaiba1.jpg"
import parnaiba2 from "../../../../assets/parnaiba3.jpg"
import parnaiba3 from "../../../../assets/parnaiba4.jpg"

const images = [
  parnaiba1,
  parnaiba2,
  parnaiba3
]

export const BackgroundSlider = () => {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentImage === 2) {
        setCurrentImage(0)
        return
      }

      setCurrentImage(currentImage + 1)
    }, 8000)

    return () => clearTimeout(timer)
  },)

  return (
    <S.Container
      img={images[currentImage]}

    >
      <Center>
        <div className="background" />
      </Center>
    </S.Container>
  )
}
