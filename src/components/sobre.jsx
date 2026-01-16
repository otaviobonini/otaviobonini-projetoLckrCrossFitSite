import './sobre.css'
import Foto from '../assets/lckrFoto1.jpg'
import { useState } from 'react'


// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Sobre() {
  const [count, setCount] = useState(0)

  function nextPhoto() {
    setCount(prev => (prev + 1) % 3)
  }

  function previousPhoto() {
    setCount(prev => (prev - 1 + 3) % 3)
  }

  return (
    <section className="divsobre">
      <div className="sobre-container">
        <div className="sobre-texto">
          <h2>
            SOBRE A <span>LCKR CROSSFIT</span>
          </h2>

          <p>
            A LCKR nasceu para pessoas que buscam mais do que treino.
            Aqui, cada aula é um desafio, cada conquista é celebrada
            e cada aluno é tratado como parte da nossa comunidade.
          </p>

          <p>
            Não é só sobre levantar peso — é sobre disciplina,
            constância e evolução física e mental.
          </p>

          <a href='https://api.whatsapp.com/send?phone=554898175758&text=Oii%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20planos%20da%20LCKR'><button className="sobre-btn">
            Conheça nossos planos
          </button></a>
        </div>

        <div className="sobre-imagem">
          <button
            className="previousPhotoButton"
            onClick={previousPhoto}
            aria-label="Foto anterior"
          >
            <i class="fa-solid fa-chevron-left"></i>
          </button>

          <div className="slider-wrapper">
            <div
              className="sliders"
              style={{ transform: `translateX(-${count * 100}%)` }}
            >
              <img src={Foto} alt="Foto 1" />
              <img src={Foto} alt="Foto 2" />
              <img src={Foto} alt="Foto 3" />
            </div>
          </div>

          <button
            className="nextPhotoButton"
            onClick={nextPhoto}
            aria-label="Próxima foto"
          >
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Sobre
