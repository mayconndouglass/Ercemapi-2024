import * as S from "./styles"

interface EventCardProps {
  icon: React.ReactNode
  text: string
  image: string
  color: "blue" | "white"
}

export const EventCard = ({ icon, text, image, color }: EventCardProps) => {
  return (
    <S.Container $backgroundImg={image} $color={color}>
      {icon}
      <h5>{text}</h5>
    </S.Container >
  )
}