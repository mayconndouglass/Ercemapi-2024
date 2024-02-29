import * as S from "./styles"

interface ScheduleCardProps {
  img: string
  title: string
  description: string
}

export const ScheduleCard = (props: ScheduleCardProps) => {
  return (
    <S.Container>
      <div className="card-img">
        <img src={props.img} alt={props.title} />
      </div>

      <div className="card-content">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </S.Container>
  )
}