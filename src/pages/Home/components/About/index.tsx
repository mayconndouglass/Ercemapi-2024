import * as S from "./styles"
import { Center } from "../../../../components/Center"

import ufdpar from "../../../../assets/ufdpar2.png"

import { FaMapMarkerAlt } from "react-icons/fa"
import { FaCalendarAlt } from "react-icons/fa"

export const About = () => {
  return (
    <S.Container>
      <Center>
        <div className="content">
          <h3>SOBRE A ERCEMAPI</h3>

          <p>As Escolas Regionais são eventos promovidos pela <span>Sociedade Brasileira de Computação (SBC)</span> voltados aos estudantes de graduação e pós-graduação cujo objetivo principal é aproximar e facilitar a presença dos estudantes em eventos da área de computação. <span>A Escola Regional de Computação Ceará, Maranhão, Piauí (ERCEMAPI)</span> tem a importante missão de ser uma representação na promoção da ciência e pesquisa na área da Computação dentro da região Nordeste. Paralelamente, como um evento satélite, teremos a realização do <span>XVI Encontro Unificado de Computação do Piauí (ENUCOMPI)</span>.</p>

          <p><span>A ERCEMAPI 2024</span> terá como temática central a <span>"Indústria 5.0 e o Futuro do Trabalho".</span> Precisamos debater com nossos congressistas o olhar sobre a colaboração entre humanos e máquinas na Indústria 5.0 e como as pesquisas estão sendo desenvolvidas, permitindo otimizar os processos, resultando em maior eficiência e produtividade. A programação do evento é composta por 6 minicursos, 5 palestras nacionais, 5 sessões técnicas, salão de protótipos, fórum dos coordenadores e professores e o encontro de programadores, além da premiação aos autores dos melhores trabalhos.</p>
        </div>

        <div className="image">
          <img src={ufdpar} alt="UFDPAR" />

          <div className="info-container">
            <div className="event-info">
              <div className="local">
                <div className="icon">
                  <span><FaCalendarAlt /></span>
                  <p>LOCAL DO EVENTO</p>
                </div>
                <p>Universidade Federal<br /> Do Piauí</p>
              </div>

              <div className="event-data">
                <div className="icon">
                  <span><FaMapMarkerAlt /></span>
                  <p>DATA DO EVENTO</p>
                </div>
                <p>De 11 a 13/09/2024</p>
              </div>
            </div>

            <p>Av. São Sebastião, 2819 - Nossa Sra. de Fátima</p>
            <p> Parnaíba - PI, 64202-020</p>
          </div>
        </div>
      </Center>
    </S.Container>
  )
}
