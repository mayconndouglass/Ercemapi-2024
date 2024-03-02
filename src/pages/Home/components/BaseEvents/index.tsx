import * as S from "./styles"

import { Center } from "../../../../components/Center"
import { Title } from "../../../../components/Title"
import { EventCard } from "../../../../components/EventCard"

import { eventData } from "../../../../data/event-data"

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
      </Center>
    </S.Container>
  )
}