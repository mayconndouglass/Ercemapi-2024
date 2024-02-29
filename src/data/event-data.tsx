import { CertificateIcon } from "../components/SvgsComponents/CertificateIcon";
import { Code } from "../components/SvgsComponents/Code";
import { Forum } from "../components/SvgsComponents/Forum";
import { LectureIcon } from "../components/SvgsComponents/LectureIcon";
import { PrototypeHall } from "../components/SvgsComponents/PrototypeHall";
import { TechnicalSessions } from "../components/SvgsComponents/TechnicalSessions";


export const eventData = {
  baseEvents: [
    {
      id: 1,
      icon: <LectureIcon />,
      text: 'Palestras'
    },
    {
      id: 2,
      icon: <CertificateIcon />,
      text: 'Minicursos'
    },
    {
      id: 3,
      icon: <TechnicalSessions />,
      text: 'Sessões Técnicas'
    }
  ],
  satelliteEvents: [
    {
      id: 4,
      icon: <PrototypeHall />,
      text: 'Salão de Protótipos'
    },
    {
      id: 5,
      icon: <Forum />,
      text: 'Fórum dos Professores'
    },
    {
      id: 6,
      icon: <Code />,
      text: 'Encontro de Programadores  '
    }
  ]
}