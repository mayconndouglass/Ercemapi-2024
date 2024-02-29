import { useState } from "react"
import * as S from "./styles"

import { Center } from "../../../../components/Center"
import { AnimatedButton } from "../../../../components/AnimatedButton"

import { RiMenu3Fill } from "react-icons/ri"
import { AiOutlineClose } from "react-icons/ai"

import logo from "../../../../assets/ercemapi-logo-white.png"

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Container $menuIsOpen={isOpen}>
      <Center>
        <div className="logo">
          <img src={logo} alt="Logo Ercemapi" />
        </div>

        <nav>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Programação</a></li>
            <li><a href="#">Eventos</a></li>
            <li><a href="#">Sobre</a></li>
            <li>
              <AnimatedButton
                $background="white"
                title="Faça sua inscrição"
                $padding={{ vertical: 0.5, horizontal: 1 }}
                color='#023E61'
              />
            </li>
          </ul>
        </nav>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {/* <AnimatedIcon icon={<RiMenu3Fill />} color='#292930' /> */}
          <AnimatedButton
            $background="white"
            title="Inscrição"
            $padding={{ vertical: 0.5, horizontal: 1 }}
            color='#023E61'
          />
          <RiMenu3Fill />
        </div>

        <S.SideBar $menuIsOpen={isOpen}>
          <div className="side-bar-header">
            {/* <img src={blueLogo} alt="Logo" /> */}

            <div className="close-menu" onClick={() => setIsOpen(!isOpen)}>
              <AiOutlineClose />
            </div>
          </div>

          <div className="list-menu">
            <nav>
              <ul>
                <li><a href="#">Início</a></li>
                <li><a href="#">Programação</a></li>
                <li><a href="#">Eventos</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Faça sua inscrição</a></li>
              </ul>
            </nav>
          </div>
        </S.SideBar>

        <div className="overlay"></div>
      </Center>
    </S.Container >
  )
}