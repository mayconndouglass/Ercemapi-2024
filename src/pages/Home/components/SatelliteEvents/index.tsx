import * as S from "./styles"

import { Center } from "../../../../components/Center"
import { Title } from "../../../../components/Title"
import { EventCard } from "../../../../components/EventCard"

import { eventData } from "../../../../data/event-data"

export const SatelliteEvents = () => {
  return (
    <S.Container>
      <Center>
        <Title text="Eventos Satélite" align="left" $color="white" />

        <div className="container-events-cards">
          {eventData.satelliteEvents.map(event => (
            <EventCard
              key={event.id}
              icon={event.icon}
              text={event.text}
              image={event.image}
              color="white"
            />
          ))}
        </div>
      </Center>
    </S.Container>
  )
}
