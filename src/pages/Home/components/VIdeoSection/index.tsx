import * as S from './styles'
import { useState } from 'react'

import { Center } from '../../../../components/Center'
import { Title } from '../../../../components/Title'

import { IoClose } from "react-icons/io5"
import { MdOutlinePlayCircle } from "react-icons/md";

import parnaiba from "../../../../assets/parnaiba2.jpg"

export const VideoSection = () => {
  const [openModal, setOpenModal] = useState<boolean>(false)

  const handleOutSideModal = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === event.currentTarget) {
      setOpenModal(false)
    }
  }

  return (
    <S.Container $openModal={openModal}>
      <Center>
        <Title align='center' text='Conheça Parnaíba' $color='#023E61' />

        <div
          className="video-container"
          onClick={() => setOpenModal(true)}
        >
          <img src={parnaiba} alt="Parnaíba" />
          <MdOutlinePlayCircle />
        </div>

        <div className="modal-video" onClick={(event) => handleOutSideModal(event)}>
          {openModal && (
            <>
              <span onClick={() => setOpenModal(false)}>
                <IoClose />
              </span>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/nGAvx0WwLL0?si=Llp0d_dP7lOPGbZr&autoplay=1&picture-in-picture=0"
                title="YouTube video player"
                frameBorder="0"
                allow="
                accelerometer;
                autoplay;
                clipboard-write;
                encrypted-media;
                gyroscope;
                
                web-share
              "
                allowFullScreen>
              </iframe>
            </>
          )}
        </div>


      </Center>
    </S.Container>
  )
}
