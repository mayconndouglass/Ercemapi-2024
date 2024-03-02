import * as S from './styles'
import { Center } from '../../../../components/Center'

import logos from "../../../../assets/logos2.png"
import { FaInstagram } from "react-icons/fa"
import { MdOutlineEmail } from "react-icons/md"
import { SlArrowRight } from "react-icons/sl"

export const Footer = () => {
  return (
    <S.Container>
      <Center>
        <div className="first-row">
          <div className="logos">
            <img src={logos} alt="Ecermapi Enucompi SBC" />
          </div>

          <div className="contact">
            <div className="insta">
              <a href=" https://instagram.com/ercemapi2024.enucompi" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
                /ercemapi2024.enucompi
              </a>
            </div>

            <div className="email">
              <MdOutlineEmail />
              contato@enucompi.com
            </div>
          </div>

          <div className="menu">
            <ul>
              <li>
                <SlArrowRight />
                <a href="#">
                  Página inicial
                </a>
              </li>

              <li>
                <SlArrowRight />
                <a href="#">
                  Programação
                </a>
              </li>

              <li>
                <SlArrowRight />
                <a href="https://www.sbc.org.br/" target="_blank" rel="noopener noreferrer">
                  Conheça a SBC
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-line" />

        <div className="all-rights">
          <p>Copyright © 2024 XII Escola Regional de Computação Ceará, Maranhão e Piauí.</p>
          <p>Todos os Direitos Reservados.</p>
          <p>Desenvolvido por Maycon Douglas</p>
        </div>
      </Center>
      <div className="yellow"></div>
    </S.Container>
  )
}
