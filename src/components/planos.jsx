import './planos.css'
export default function Planos() {
  return (
    <section className="planos" id="planos">
      <div className="container">
        <h2>NOSSOS <span className='destaque'>PLANOS</span></h2>

        <div className="planos-grid">
          <div className="plano-card">
            <h3>Mensal</h3>
            <p>Ideal para quem quer começar sem compromisso de longo prazo.</p>
            <button>Mais informações</button>
          </div>

          <div className="plano-card destaque">
            <h3>Trimestral</h3>
            <p>Mais constância no treino com melhor custo-benefício.</p>
            <button>Mais informações</button>
          </div>

          <div className="plano-card">
            <h3>Semestral</h3>
            <p>Compromisso com resultados e economia no valor mensal.</p>
            <button>Mais informações</button>
          </div>

          <div className="plano-card">
            <h3>Anual</h3>
            <p>Plano mais completo, máxima economia e foco total na evolução.</p>
            <button>Mais informações</button>
          </div>
        </div>
      </div>
    </section>
  );
}