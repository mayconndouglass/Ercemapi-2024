import * as S from "./styles"

import { Center } from "../../../../components/Center"
import { Title } from "../../../../components/Title"
import { cardsContent } from "../EventSchdule/data/cards-content"
import { eventData } from "../../../../data/event-data"
import { EventCard } from "../../../../components/EventCard"
import { ServiceCard } from "../../../../components/ServiceCard"

export const BaseEvents = () => {
  return (
    <S.Container>
      <Center>
        <Title text="Eventos Base" align="left" />

        <div className="container-events-cards">
          {eventData.baseEvents.map(event => (
            <EventCard icon={event.icon} text={event.text} key={event.id} />
          ))}
        </div>

        <div className="testing">
          <ServiceCard text="Palestras" image={cardsContent[0].img} />
          <ServiceCard text="Minicursos" image={cardsContent[1].img} />
          <ServiceCard text="Sessões Técnicas" image={cardsContent[2].img} />
        </div>
      </Center>
    </S.Container>
  )
}