import * as S from "./styles"

interface EventCardProps {
  icon: React.ReactNode
  text: string
}

export const EventCard = ({ icon, text }: EventCardProps) => {
  return (
    <S.Container>
      {icon}
      <h5>{text}</h5>
    </S.Container >
  )
}