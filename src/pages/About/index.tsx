import { Center } from '../../components/Center'
import { Separator } from '../../components/Separator'
import { Title } from '../../components/Title'
import * as S from './styles'
import { IoClose } from "react-icons/io5"

import { images } from './images'
import { useEffect, useState } from 'react'

export const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [imageSelected, setImageSelected] = useState<null | string>(null)

  const handleOutSideModal = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === event.currentTarget) {
      setImageSelected(null)
    }
  }

  return (
    <>
      <Separator />
      <S.Container $openModal={imageSelected !== null}>
        <Center>
          <Title align='left' text='Sobre' />

          <div className="line" />

          <div className="content">
            <p>
              As Escolas Regionais são eventos voltados aos estudantes de graduação e pós-graduação cujo objetivo principal é aproximar e facilitar a presença dos estudantes em eventos da área de computação. <strong>A Escola Regional de Computação Ceará, Maranhão, Piauí (ERCEMAPI)</strong> tem como objetivo disseminar o conhecimento técnico e científico sobre temas e assuntos de vanguarda na área de Computação. As Escolas Regionais são eventos promovidos pela Sociedade Brasileira de Computação (SBC). A ERCEMAPI visa se consolidar como um evento de referência nos Estados do Ceará, Maranhão e Piauí, além de ter uma importante representação na promoção da ciência e pesquisa na área da Computação dentro da região Nordeste. Além disso, o evento colabora e contribui com a consolidação dos Programas de Pós-Graduação da região.
            </p>

            <p>
              Paralelamente, como um evento satélite, teremos a realização do Encontro Unificado de Computação do Piauí (ENUCOMPI). O ENUCOMPI vem unindo as instituições de ensino na área de Informática/Computação no estado do Piauí, com o objetivo de contribuir para a troca de experiências, buscando a união dos acadêmicos e no incentivo à produção de trabalhos científicos ligados à área de tecnologia. Em edições anteriores pode proporcionar aos seus participantes, publicações em revistas indexadas como na Revista IEEE América Latina, Revista Brasileira de Computação Aplicada, Revista de Sistemas e Computação, Revista de Informática Aplicada e Revista Learning & Nonlinear Models.
            </p>

            <p>
              A primeira edição da Escola Regional de Computação dos Estados do Ceará, Maranhão e Piauí (ERCEMAPI) ocorreu em 2007 e foi sediada em Fortaleza, CE. A segunda edição da ERCEMAPI foi realizada na cidade de São Luís, MA. Em 2009, foi realizada a terceira edição da ERCEMAPI na cidade de Parnaíba, PI. Em 2010, a ERCEMAPI foi realizada na cidade de Sobral, CE. O evento recebeu 258 participantes de diversas IES do país e mais 55 estudantes de ensino médio complementando a plateia dos 41 trabalhos apresentados na ERCEMAPI 2010. No ano de 2011, a ERCEMAPI foi realizada pela UFPI em parceira com IFPI, no estado do Piauí. Foram convidados professores e pesquisadores de diversas instituições do país, entre eles: UFRGS, UFSC, UnB, UFRN, UERN, UFBA, UFMA, UNIVALI, UFCG, UNICAMP, IFPI e da própria UFPI. No ano de 2012, a VI Escola Regional de Computação dos Estados do Ceará, Maranhão e Piauí, ocorreu em São Luís do Maranhão em conjunto com a IV Jornada de Informática do Maranhão (JIM 2012). Os palestrantes convidados abordaram temas de Interação Humano Computador (Profa. Dra. Raquel Prates – UFMG) e Imagens Térmicas e seus usos na Biomédica (Profa. Dra. Aura Conci – UFF). Retornando em 2019, a VII Escola Regional de Computação Ceará, Maranhão, Piauí (ERCEMAPI 2019) foi sediada no Centro de Ciências Exatas da Universidade Federal do Maranhão (UFMA). Tiveram presentes estudantes e/ou professores do Maranhão, Piauí, Ceará, Tocantins, Paraíba, Rio de Janeiro e Rio Grande do Norte. Em 2020, a escola foi organizada pela comunidade do Piauí, na forma de conferência virtual por conta da pandemia. Pesquisa e Empreendedorismo foram temas centrais da edição. A ERCEMAPI 2021 foi realizada, novamente em formato online, pela UFC em Quixadá-CE. Em 2022, o evento foi organizado pelo Instituto Federal do Maranhão (IFMA), UEMA, Universidade Federal do Maranhão (UFMA) e pelo Centro Universitário UNDB. No último ano, a ERCEMAPI foi sediada em Aracati (CE).
            </p>
          </div>

          <div className="images">
            {images.map(image => (
              <div
                key={image.id}
                className="image"
                onClick={() => setImageSelected(image.src)}>
                <img src={image.src} alt="Ercemapi" />
              </div>
            ))}
          </div>

          <div className="popup-img" onClick={(event) => handleOutSideModal(event)}>
            <span onClick={() => setImageSelected(null)}><IoClose /></span>
            <img src={imageSelected ?? ''} alt="Ercemapi" />
          </div>
        </Center>
      </S.Container>
    </>
  )
}