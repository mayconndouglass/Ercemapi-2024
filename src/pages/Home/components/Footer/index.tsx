import * as S from "./styles"

import { Center } from "../../../../components/Center"
import { AnimatedIcon } from "../../../../components/AnimatedIcon"

import { IoLogoInstagram } from "react-icons/io5"
import logos from "../../../../assets/logos2.png"

export const Footer = () => {
  return (
    <S.Container>
      <Center>
        <div className="principal-information">
          <div className="footer-first-col">
            <h5>Enucompi 2024</h5>
            <p>Redes Sociais:</p>
            <AnimatedIcon icon={<IoLogoInstagram />} color="white" />
          </div>

          <div className="footer-second-col">
            <h5>Nos Contate</h5>
            <p>contato@enucompi.com</p>
            <p>Universidade Federal do Delta do Parnaíba</p>
            <p>Av. São Sebastião, 2819 - Nossa Sra. de Fátima</p>
          </div>

          <div className="footer-third-col">
            <h5>Menu</h5>
            <ul>
              <a href="#"><li>Inicio</li></a>
              <a href="#"><li>Programação</li></a>
              <a href="#"><li>Eventos</li></a>
              <a href="#"><li>Sobre</li></a>
            </ul>
          </div>

          <div className="footer-fourth-col">
            <img src={logos} alt="Sbc Enucompi Ercemapi" />
          </div>
        </div>

        <div className="footer-line" />

        <div className="all-rights">
          <p>Copyright © 2024 XII Escola Regional de Computação Ceará, Maranhão e Piauí.</p>
          <p>Todos os Direitos Reservados.</p>
          <p>Desenvolvido por Maycon Douglas</p>
        </div>
      </Center>
    </S.Container>
  )
}