import * as S from "./styles"
import { useEffect } from "react"

import { Center } from "../../components/Center"
import { Separator } from "../../components/Separator"
import { Title } from "../../components/Title"

export const Articles = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Separator />
      <S.Container>
        <Center>
          <Title align="left" text="Artigos" />

          <div className="line" />

          <div className="content">
            <h6>Chamada de Artigos</h6>
            <p>
              A <strong>VIII Escola Regional de Computação Ceará, Maranhão, Piauí (ERCEMAPI 2024)</strong> tem como objetivo disseminar o conhecimento técnico e científico sobre temas e assuntos de vanguarda na área de Computação. A escola busca incentivar a produção, publicação e disseminação de material técnico, didático e científico de alta qualidade. É um fórum de integração entre coordenadores de curso, pesquisadores, alunos de graduação e pós-graduação, e representantes dos setores governamental, industrial e de serviços dos Estados do Piauí, Ceará, Maranhão e demais regiões.
            </p>

            <p>
              As Escolas Regionais são eventos promovidos pela <strong>Sociedade Brasileira de Computação (SBC)</strong>, uma das maiores sociedades científicas do país com atuação diversa em questões nacionais relativas à Computação. A ERCEMAPI é organizada por um comitê composto por representantes institucionais da SBC em Instituições de Ensino Superior (IES) dos três estados. A Realização da ERCEMAPI 2024 ficará a cargo da Secretaria Regional SBC Piauí, do Programa de Pós-Graduação em Ciência da Computação (PPGCC) e Programa de Pós-Graduação – Doutorado em Ciência da Computação – Associação UFMA-UFPI (DCCMAPI). A escola será realizada em conjunto com o <strong>XVII ENUCOMPI (Encontro Unificado de Computação do Piauí)</strong>, que congrega instituições, professores e estudantes na área de Informática e Computação do estado do Piauí.
            </p>

            <h6>Formato de Submissão</h6>
            <p>
              Deve ser utilizado o formato para submissão de artigos definido pela SBC (<a href="http://www.sbc.org.br/documentos-da-sbc/summary/169-templates-para-artigos-e-capitulos-de-livros/878-modelosparapublicaodeartigos" target="_blank" rel="noopener noreferrer">padrão SBC</a>). Os artigos submetidos devem ser anônimos, não contendo nomes, endereços ou outras informações que possam identificar seus autores. Todos os artigos devem estar no formato PDF e poderão ser submetidos em português ou inglês. Serão aceitas submissões de dois tipos de trabalhos:
            </p>
            <p>
              <ul>
                <li>
                  — Trabalho Completo: Trabalhos concluídos sobre pesquisas realizadas em um dos tópicos de interesse ou em outros tópicos relacionados a aplicações computacionais. Esses trabalhos deverão ter o mínimo de 8 e o máximo de 10 páginas.
                </li>

                <li>
                  — Resumo Expandido: Trabalhos ainda não concluídos, mas com ideias relevantes a serem discutidas e resultados preliminares. Esses trabalhos têm um limite de até 6 páginas.
                </li>
              </ul>
            </p>

            <p>
              A submissão dos trabalhos será exclusivamente eletrônica através do Sistema JEMS. O aceite de um artigo implica que pelo menos um dos seus autores deverá se inscrever no evento e apresentá-lo em sessão técnica, sob pena de não publicação. A ERCEMAPI 2024 irá premiar os melhores artigos em ambas as categorias: Trabalho Completo e Resumo Expandido.
            </p>

            <h6>Tópicos de interesse</h6>
            <p>
              O evento possui tópicos de interesse geral, abrangendo as principais áreas da Computação e Informática, relevantes no contexto do Estado do Piauí, Ceará e Maranhão. A lista não-exaustiva de tópicos de interesse inclui:
            </p>
            <p>
              <ul>
                <li>— Análise de Aprendizagem;</li>

                <li>— Avaliação de Desempenho;</li>

                <li>— Arquitetura de Computadores;</li>

                <li>— Banco de Dados;</li>

                <li>— Bioinformática;</li>

                <li>— Ciência de Dados;</li>

                <li>— Computação Aplicada à Saúde</li>

                <li>— Computação em Nuvem;</li>

                <li>— Computação Gráfica;</li>

                <li>— Educação em Informática;</li>

                <li>— Empreendedorismo e Inovação;</li>

                <li>— Engenharia de Software;</li>

                <li>— Gestão de Tecnologia da Informação;</li>

                <li>— Inclusão Digital;</li>

                <li>— Informática na Educação;</li>

                <li>— Informática Pública;</li>

                <li>— Informática Industrial;</li>

                <li>— Inteligência Artificial;</li>

                <li>— Interação Humano-Computador;</li>

                <li>— Internet das Coisas (IoT);</li>

                <li>— Jogos e Gamificação;</li>

                <li>— Mineração de Dados;</li>

                <li>— Otimização;</li>

                <li>— Processamento de Imagens;</li>

                <li>— Qualidade de Software;</li>

                <li>— Reconhecimento de Padrões;</li>

                <li>— Redes de Computadores;</li>

                <li>— Robótica;</li>

                <li>— Segurança da Informação;</li>

                <li>— Sistemas de Informação;</li>

                <li>— Sistemas Distribuídos e Computação Móvel;</li>

                <li>— Sistemas Hipermídia, Multimídia e Web;</li>

                <li>— Sistemas Operacionais.</li>
              </ul>
            </p>

            <h6>Premiação</h6>
            <p>
              Todos os artigos aceitos para compor a programação da ERCEMAPI 2024, que forem devidamente apresentados durante o evento, serão, mediante assinatura do Termo de Autorização de Publicação, disponibilizados no SBC OpenLib (SOL), portal de publicações e conteúdos digitais da SBC, com devido registro de selo ISSN e número identificador DOI.
            </p>

            <p>
              A ERCEMAPI 2024 irá premiar os melhores artigos, em ambas as categorias. Serão premiados 3 (três) Trabalhos Completos (um best paper e duas menções honrosas) e 2 (dois) Resumos Expandidos (um best paper e uma menção honrosa).
            </p>

            <h6>
              Revistas Parceiras
            </h6>
            <p>
              O Comitê Científico convidará os autores de trabalhos de destaque apresentados no evento para submeter versões estendidas para periódicos, tais como o <a href="https://jhi.sbis.org.br/index.php/jhi-sbis" target="_blank" rel="noopener noreferrer">Journal of Health Informatics – JHI</a> (QUALIS A4) e a <a href="https://revistas.unifacs.br/index.php/rsc" target="_blank" rel="noopener noreferrer">Revista de Sistemas e Computação – RSC</a> (QUALIS B4). Os artigos selecionados, para se tornarem manuscritos de periódicos, deverão ser estendidos e revisados de acordo com a política dos periódicos e serão avaliados com base na originalidade, técnica, conteúdo/profundidade de pesquisa, correção, contribuições e legibilidade.
            </p>

            <h6>
              Datas Importantes
            </h6>
            <ul>
              <li>— Data limite para submissão: 05 de julho de 2024 </li>
              <li>— Notificação de aceitação: 05 de agosto de 2024  </li>
              <li>— Envio da Versão Final: 12 de agosto de 2024 </li>
              <li>— Inscrição dos Autores: 12 de agosto de 2024 </li>
            </ul>

            <h6>Coordenação do Comitê Científico</h6>
            <p>
              Prof. Dr. Rodrigo Veras

              <span>rveras@ufpi.edu.br</span>
            </p>
          </div>
        </Center>
      </S.Container>
    </>
  )
}
