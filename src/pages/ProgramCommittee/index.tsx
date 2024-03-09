import * as S from './styles'
import { Center } from '../../components/Center'
import { Separator } from '../../components/Separator'
import { Title } from '../../components/Title'

import { CommitteeNames as names } from './data/committee-names'
import { useEffect } from 'react'

export const ProgramCommittee = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Separator />
      <S.Container>
        <Center>
          <Title align='left' text='Comitê de Programa' />

          <div className="line" />

          <div className="committee-names">
            {names.map(name => (
              <div className="name" key={name.id}>
                <h5>{name.name}</h5>
                <p>{name.institution}</p>
              </div>
            ))}

          </div>
        </Center>
      </S.Container>
    </>
  )
}
