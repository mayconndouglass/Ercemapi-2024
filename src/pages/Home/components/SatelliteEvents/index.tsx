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
            <EventCard icon={event.icon} text={event.text} key={event.id} />
          ))}
        </div>
      </Center>
    </S.Container>
  )
}
