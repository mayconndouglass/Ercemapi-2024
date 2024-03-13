import * as S from "./styles"
import { Separator } from "../../components/Separator"
import { Center } from "../../components/Center"
import { Title } from "../../components/Title"

export const PrototypeHall = () => {
  return (
    <>
      <Separator />
      <S.Container>
        <Center>
          <Title align="left" text="Salão de Protótipos" />

          <div className="line" />

          <div className="content">
            <h6>Chamada de Salão de Protótipos</h6>
            <p>
              O Salão de Protótipos da ERCEMAPI 2024 convida interessados a submeterem trabalhos nas áreas de Software as a Services (SaaS), aplicativos mobile, sistemas para WEB, jogos, sistemas embarcados, inteligência artificial, ferramentas de simulação, ferramentas para desenvolvimento, entre outras.
            </p>

            <h6>
              Regras para Submissão
            </h6>
            <p>
              Os trabalhos serão submetidos para avaliação no formato de resumo expandido. Este deve ter até 2 páginas, seguindo o template disponibilizado no site do evento <a href="https://docs.google.com/document/d/1jfn2HQvbwa4es6yyiQne4_d50N335nv4JUaJj5tCVMU/edit" target="_blank" rel="noopener noreferrer">(clique AQUI).</a>

              Os autores de trabalhos aceitos para apresentação no Salão de Protótipos serão responsáveis pela preparação do material a ser utilizado nas demonstrações.

              Deverá ser preparado e impresso um pôster para exposição na conferência, com orientação vertical e tamanho sugerido de 80cm x 120cm, conforme modelo disponibilizado <a href="https://docs.google.com/presentation/d/1Z0RiSPVzX5v7D-_Ma5rICvmtfHNBMLO0/edit?usp=sharing&ouid=112098072414210651329" target="_blank" rel="noopener noreferrer">(clique AQUI).</a>

              A submissão dos trabalhos para avaliação e seleção será feita, exclusivamente, via formulário eletrônico disponibilizado pela organização do evento <a href="https://forms.gle/2M9hWSWn5hadLXgh9" target="_blank" rel="noopener noreferrer">(clique AQUI).</a>
            </p>

            <h6>Forma de Apresentação</h6>
            <p>
              Os autores deverão estar presentes na programação do Salão de Protótipos para apresentação dos trabalhos. Os autores podem utilizar outras mídias como computadores, monitores, consoles, panfletos e etc. Estas mídias são de responsabilidade dos autores. A infraestrutura de mesas, pontos de energia e internet sem fio será disponibilizada pelo evento. Pelo menos um dos proponentes do protótipo deverá estar inscrito no evento para fazer a apresentação.
            </p>

            <h6>Tópicos de interesse</h6>
            <ul>
              <li>— Software as a Services (SaaS)</li>
              <li>— Aplicativos mobile</li>
              <li>— Sistemas para WEB</li>
              <li>— Jogos</li>
              <li>— Sistemas embarcados</li>
              <li>— Inteligência artificial</li>
              <li>— Ferramentas de simulação</li>
              <li>— Ferramentas para desenvolvimento</li>
              <li>— Robótica</li>
              <li>— Automação residencial</li>
              <li>— Automação industrial</li>
              <li>— Segurança da informação</li>
              <li>— Internet das coisas (IoT)</li>
            </ul>

            <h6>Datas Importantes </h6>
            <ul>
              <li>— Submissão do Resumo de Protótipos: 15 de julho de 2024</li>
              <li>— Notificação de Aceitação: 12 de agosto de 2024 </li>
              <li>— Confirmação dos Autores: 26 de agosto de 2024 </li>
              <li>— Inscrição dos Autores: 26 de agosto de 2024 </li>
            </ul>

            <h6>Coordenação do Salão de Protótipos </h6>
            <p>
              Prof. Dr. Alcemir Rodrigues Santos(UESPI)

              <span>alcemir@prp.uespi.br</span>
            </p>
          </div>
        </Center>
      </S.Container>
    </>
  )
}