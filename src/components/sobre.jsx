import './sobre.css'
import Foto from '../assets/lckrFoto1.jpg'
import { useState } from 'react'

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

          <button className="sobre-btn">
            Conheça nossos planos
          </button>
        </div>

        <div className="sobre-imagem">
          <button
            className="previousPhotoButton"
            onClick={previousPhoto}
            aria-label="Foto anterior"
          >
            {'<'}
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
            {'>'}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Sobre
