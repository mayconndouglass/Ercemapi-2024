import { CertificateIcon } from "../components/SvgsComponents/CertificateIcon"
import { Code } from "../components/SvgsComponents/Code"
import { Forum } from "../components/SvgsComponents/Forum"
import { LectureIcon } from "../components/SvgsComponents/LectureIcon"
import { PrototypeHall } from "../components/SvgsComponents/PrototypeHall"
import { TechnicalSessions } from "../components/SvgsComponents/TechnicalSessions"

import palestras from "../assets/card-background1.webp"
import minicursos from "../assets/minicursos.webp"
import prototipos from "../assets/prototipos.webp"
import encontro from "../assets/encontro.webp"
import tecnicas from "../assets/sessoes-tecnicas.webp"

export const eventData = {
  baseEvents: [
    {
      id: 1,
      icon: <LectureIcon />,
      text: 'Palestras',
      image: palestras
    },
    {
      id: 2,
      icon: <CertificateIcon />,
      text: 'Minicursos',
      image: minicursos
    },
    {
      id: 3,
      icon: <TechnicalSessions />,
      text: 'Sessões Técnicas',
      image: tecnicas
    }
  ],
  satelliteEvents: [
    {
      id: 4,
      icon: <PrototypeHall />,
      text: 'Salão de Protótipos',
      image: prototipos
    },
    {
      id: 5,
      icon: <Forum />,
      text: 'Fórum dos Professores',
      image: palestras
    },
    {
      id: 6,
      icon: <Code />,
      text: 'Encontro de Programadores',
      image: encontro
    }
  ]
}