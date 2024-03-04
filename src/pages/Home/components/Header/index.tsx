import { useState } from "react"
import * as S from "./styles"

import { Center } from "../../../../components/Center"
import { AnimatedButton } from "../../../../components/AnimatedButton"

import { RiMenu3Fill } from "react-icons/ri"
import { AiOutlineClose } from "react-icons/ai"
import { SlArrowDown } from "react-icons/sl"

import ercemapi from "../../../../assets/Ercemapi 2020.png"
import enucompi from "../../../../assets/Logo ENUCOMPI.png"
import sbc from "../../../../assets/logosbc.png"

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [eventOpen, setEventOpen] = useState(false)
  const [callsOpen, setcallsOpen] = useState(false)

  return (
    <S.Container $menuIsOpen={isOpen}>
      <Center>
        <div className="logos" id="top">
          <img src={ercemapi} alt="Ercemapi" />
          <img src={enucompi} alt="Enucompi" />
          <a href="https://www.sbc.org.br/" target="_blank" rel="noopener noreferrer">
            <img src={sbc} alt="SBC" />
          </a>
        </div>

        <nav className="main-nav">
          <ul>
            <li>
              <a href="#">O Evento</a>
              <ul>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Organização</a></li>
                <li><a href="#">Comitê de Programa</a></li>
              </ul>
            </li>
            <li>
              <a href="#">Chamadas</a>
              <ul>
                <li><a href="#">Artigos</a></li>
                <li><a href="#">Minicursos</a></li>
                <li><a href="#">Salão de Protótipos</a></li>
              </ul>
            </li>
            <li><a href="#">Programação</a></li>
            <li>
              <AnimatedButton
                $background="#0052a1"
                title="INSCRIÇÕES"
                $padding={{ vertical: 0.5, horizontal: 1 }}
                color='white'
              />
            </li>
          </ul>
        </nav>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <AnimatedButton
            $background="#0052A1"
            title="Inscrição"
            $padding={{ vertical: 0.5, horizontal: 1 }}
            color='white'
          />
          <RiMenu3Fill />
        </div>

        <S.SideBar
          $menuIsOpen={isOpen}
        >
          <div className="side-bar-header">
            <div className="close-menu" onClick={() => setIsOpen(!isOpen)}>
              <AiOutlineClose />
            </div>
          </div>

          <div className="list-menu">
            <nav>
              <ul>
                <li onClick={() => setEventOpen(!eventOpen)}>
                  <a href="#">O Evento <SlArrowDown /></a>
                  <ul className={eventOpen ? "active" : ""}>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Organização</a></li>
                    <li><a href="#">Comitê de Programa</a></li>
                  </ul>
                </li>
                <li onClick={() => setcallsOpen(!callsOpen)}>
                  <a href="#">Chamadas <SlArrowDown /></a>
                  <ul className={callsOpen ? "active" : ""}>
                    <li><a href="#">Artigos</a></li>
                    <li><a href="#">Minicursos</a></li>
                    <li><a href="#">Salão de Protótipos</a></li>
                  </ul>
                </li>
                <li><a href="#">Programação</a></li>
                <li><a href="#">Inscrição</a></li>
              </ul>
            </nav>
          </div>
        </S.SideBar>

        <div className="overlay"></div>
      </Center>
    </S.Container >
  )
}