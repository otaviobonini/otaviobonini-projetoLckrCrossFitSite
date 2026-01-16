import './modalidades.css'
import Crossfit from '../assets/crossfit-modalidade.jpeg'
import Hyrox from '../assets/hyrox-exemplo.png'
import Strong from '../assets/hyrox.jpeg'
import Ginastica from '../assets/menu.png'


  function next() {
    
  }

  function previous() {
    
  }


export default function Modalidades() {
  return (
    <section className="modalidades" id="modalidades">

      <div className="container">
        <h2>Nossas <span className='destaque'>Modalidades</span></h2>

        <div className="modalidades-grid">
          <div className="modalidade-card">
            <img src={Crossfit}></img>
            <h3>CrossFit</h3>
            <p>
              Treinamento funcional constantemente variado, com movimentos do dia a dia,
              combinando força, resistência e condicionamento físico.
              Indicado para todos os níveis.
            </p>
          </div>

          <div className="modalidade-card">
            <img src={Hyrox}></img>
            <h3>HYROX</h3>
            <p>
              Treinos de alta intensidade que unem corrida e exercícios funcionais,
              focados em resistência, performance e superação.
            </p>
          </div>

          <div className="modalidade-card">
            <img src={Strong}></img>
            <h3>Strong</h3>
            <p>
              Modalidade voltada para o desenvolvimento de força máxima,
              utilizando cargas elevadas e movimentos fundamentais.
            </p>
          </div>

          <div className="modalidade-card">
            <img src={Ginastica}></img>
            <h3>Ginástica</h3>
            <p>
              Treinos focados em controle corporal, mobilidade, força e consciência do movimento,
              auxiliando na evolução técnica e prevenção de lesões.
            </p>
            
          </div>
        </div>
      </div>
      
    </section>
  );
}
