import * as S from "./styles"
import { useEffect } from "react"

import { Center } from "../../components/Center"
import { Separator } from "../../components/Separator"
import { Title } from "../../components/Title"

export const Workshops = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Separator />
      <S.Container>
        <Center>
          <Title align="left" text="Minicursos" />

          <div className="line" />

          <div className="content">
            <h6>Chamada de Minicursos</h6>
            <p>
              A ERCEMAPI 2024 tem como objetivo disseminar o conhecimento técnico e científico sobre temas e assuntos de vanguarda na área de Computação, colaborar e contribuir com a consolidação dos Programas de Pós-Graduação e consolidar-se como um evento de referência nos Estados do Ceará, Maranhão e Piauí, e Região Nordeste.
            </p>

            <p>
              Convidamos alunos de graduação e pós-graduação, pesquisadores e profissionais a submeterem proposta de minicursos com duração de 4 (quatro) horas, abordando os temas sugeridos nesta chamada. Os minicursos devem ser submetidos, exclusivamente, por meio da plataforma JEMS.
            </p>

            <h6>
              Formato de Submissão
            </h6>

            <p>
              Para o processo de seleção, os autores deverão enviar um arquivo, em formato PDF, contendo título, autores (indicando o provável apresentador), instituição de vínculo, público alvo, resumo do minicurso, e currículo resumido dos autores. O resumo deve especificar a estrutura do texto em seções e conter a bibliografia a ser usada. A estrutura do resumo do minicurso deve trazer os seguintes tópicos: relevância da proposta, conteúdo programático, metodologia do minicurso (especificando a prática, se houver).
            </p>

            <p>
              Os minicursos serão ministrados em ambientes de sala de aula, sem necessariamente que os participantes tenham recursos de computadores, seguindo modelo praticado pela SBC. Todas as práticas devem ser simuladas e detalhadas na máquina do ministrante. Cada proposta será submetida à avaliação por pares e julgada segundo sua relevância técnico-científica, adequação ao evento e qualidade do texto. O resumo deverá seguir o modelo de <a href="https://www.sbc.org.br/documentos-da-sbc/summary/169-templates-para-artigos-e-capitulos-de-livros/878-modelosparapublicaodeartigos" target="_blank" rel="noopener noreferrer">artigos da SBC</a> e não deverá ultrapassar 5 páginas.
            </p>

            <h6>Capítulo de Livro </h6>
            <p>
              Os autores dos minicursos selecionados para a ERCEMAPI 2024 deverão submeter, na data indicada na programação, o texto final do capítulo (com até 25 páginas) a ser publicado em livro com ISBN e número identificado DOI. A proposta deve estar de acordo com o formato de <a href="https://www.sbc.org.br/documentos-da-sbc/summary/169-templates-para-artigos-e-capitulos-de-livros/879-modeloparapublicaodecaptulosdelivros" target="_blank" rel="noopener noreferrer">capítulos de livros da SBC</a>.

              O resumo do minicurso e a versão final de capítulo deverão ser submetidos, exclusivamente de forma eletrônica, pelo sistema JEMS. A aceitação de um minicurso implica que pelo menos um dos seus autores deverá se inscrever no evento para apresentação do mesmo, e que um capítulo de livro deverá ser escrito.
            </p>

            <h6>Temas de interesse</h6>
            <p>
              A lista não-exaustiva de tópicos de interesse inclui:
            </p>

            <p>
              <ul className="first-workshop-list">
                <li>— Análise de Aprendizagem</li>

                <li>— Avaliação de Desempenho</li>

                <li>— Arquitetura de Computadores</li>

                <li>— Banco de Dados</li>

                <li>— Bioinformática</li>

                <li>— Ciência de Dados</li>

                <li>— Computação em Nuvem</li>

                <li>— Computação Gráfica</li>

                <li>— Educação em Informática</li>

                <li>— Empreendedorismo e Inovação</li>

                <li>— Engenharia de Software</li>

                <li>— Gestão de Tecnologia da Informação</li>

                <li>— Inclusão Digital</li>

                <li>— Informática na Educação</li>

                <li>— Informática Pública</li>

                <li>— Informática Industrial</li>

                <li>— Inteligência Artificial</li>

                <li>— Interação Humano-Computador</li>

                <li>— Internet das Coisas (IoT)</li>

                <li>— Jogos e Gamificação</li>

                <li>— Mineração de Dados</li>

                <li>— Otimização</li>

                <li>— Processamento Digital de Imagens</li>

                <li>— Qualidade de Software</li>

                <li>— Reconhecimento de Padrões</li>

                <li>— Redes de Computadores</li>

                <li>— Robótica</li>

                <li>— Segurança da Informação</li>

                <li>— Sistemas de Informação</li>

                <li>— Sistemas Distribuídos e Computação Móvel</li>

                <li>— Sistemas Hipermídia, Multimídia e Web</li>

                <li>— Sistemas Operacionais</li>

                <li>— Software Livre</li>

                <li>— Visão Computacional</li>
              </ul>
            </p>


            <h6>Datas Importantes </h6>

            <ul>
              <li>
                — Submissão Resumo de Minicursos: 29 de abril de 2024
              </li>

              <li>
                — Notificação de Aceitação: 08 de julho de 2024
              </li>

              <li>
                — Confirmação dos Autores: 15 de julho de 2024
              </li>

              <li>
                — Envio da Versão Final do Capítulo: 26 de agosto de 2024
              </li>

              <li>
                — Envio do Termo de Autorização de Publicação: 26 de agosto de 2024
              </li>

              <li>
                — Inscrição dos Autores: 26 de agosto de 2024
              </li>
            </ul>



            <h6>Coordenação de Minicursos</h6>
            <p>
              Prof. Dr. Romuere Veloso e Silva (UFPI)

              <span>romuere@ufpi.edu.br</span>
            </p>
          </div>
        </Center>
      </S.Container>
    </>
  )
}
