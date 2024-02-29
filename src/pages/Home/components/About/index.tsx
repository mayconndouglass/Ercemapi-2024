import * as S from "./styles"

import { Center } from "../../../../components/Center"
import { Title } from "../../../../components/Title"

export const About = () => {
  return (
    <S.Container>
      <Center>
        <Title
          text="Sobre"
          align="left"
        />

        <h3>ERCEMAPI 2024</h3>

        <div className="content-about">
          <p>As Escolas Regionais são eventos promovidos pela Sociedade Brasileira de Computação (SBC) voltados aos estudantes de graduação e pós-graduação cujo objetivo principal é aproximar e facilitar a presença dos estudantes em eventos da área de computação. A Escola Regional de Computação Ceará, Maranhão, Piauí (ERCEMAPI) tem a importante missão de ser uma representação na promoção da ciência e pesquisa na área da Computação dentro da região Nordeste. Paralelamente, como um evento satélite, teremos a realização do XVI Encontro Unificado de Computação do Piauí (ENUCOMPI).</p>

          <p>A ERCEMAPI 2024 terá como temática central a "Indústria 5.0 e o Futuro do Trabalho". Precisamos debater com nossos congressistas o olhar sobre a colaboração entre humanos e máquinas na Indústria 5.0 e como as pesquisas estão sendo desenvolvidas, permitindo otimizar os processos, resultando em maior eficiência e produtividade. A programação do evento é composta por 6 minicursos, 5 palestras nacionais, 5 sessões técnicas, salão de protótipos, fórum dos coordenadores e professores e o encontro de programadores, além da premiação aos autores dos melhores trabalhos. </p>
        </div>
      </Center>
    </S.Container>
  )
}