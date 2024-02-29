import * as S from "./styles"

import { Center } from "../../../../components/Center"
import { Title } from "../../../../components/Title"
import { ScheduleCard } from "./components/ScheduleCard"

import { cardsContent } from "./data/cards-content"

export const EventSchedule = () => {
  return (
    <S.Container>
      <Center>
        <Title text="Programação" align="center" />

        <div className="container-schedule">
          <svg id="bg-services"
            width="100%"
            viewBox="0 0 1000 800">
            <defs>
              <linearGradient id="PSgrad_02" x1="64.279%" x2="0%" y1="76.604%" y2="0%">
                <stop offset="0%" stop-color="rgb(1,230,248)" stop-opacity="1" />
                <stop offset="100%" stop-color="rgb(29,62,222)" stop-opacity="1" />
              </linearGradient>
            </defs>
            <path fill-rule="evenodd" opacity="0.102" fill="url(#PSgrad_02)"
              d="M801.878,3.146 L116.381,128.537 C26.052,145.060 -21.235,229.535 9.856,312.073 L159.806,710.157 C184.515,775.753 264.901,810.334 338.020,792.380 L907.021,652.668 C972.912,636.489 1019.383,573.766 1011.301,510.470 L962.013,124.412 C951.950,45.594 881.254,-11.373 801.878,3.146 Z" />
          </svg>
          <div className="container-cards">
            {cardsContent.map(props => (
              <ScheduleCard
                key={props.id}
                img={props.img}
                title={props.title}
                description={props.description}
              />
            ))}
          </div>
        </div>
      </Center>
    </S.Container>
  )
}
