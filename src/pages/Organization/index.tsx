import * as S from './styles'
import { useEffect } from 'react'

import { Center } from '../../components/Center'
import { Separator } from '../../components/Separator'
import { Title } from '../../components/Title'

import { organizerDetails } from './data'

export const Organization = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Separator />
      <S.Container>
        <Center>
          <Title align='left' text='Organização' />

          <div className="organizers-container">
            {organizerDetails.map(organizer => (
              <div className="organizer" key={organizer.id}>
                <div className="img">
                  {organizer.image ? (
                    <img src={organizer.image} alt="" />
                  ) : (
                    <div></div>
                  )}
                </div>

                <div className="content">
                  <h5>{organizer.name}</h5>
                  <p>{organizer.title}</p>
                  <span>{organizer.institution}</span>
                </div>
              </div>
            ))}
          </div>
        </Center>
      </S.Container>
    </>
  )
}
