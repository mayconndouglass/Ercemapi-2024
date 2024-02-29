import * as S from "./styles"

interface TitleProps {
  text: string
  align: "left" | "center",
  $color?: string
}

export const Title = ({ text, align, $color = "#023E61" }: TitleProps) => {
  return (
    <S.Container $color={$color} align={align}>
      {text}
    </S.Container>
  )
}