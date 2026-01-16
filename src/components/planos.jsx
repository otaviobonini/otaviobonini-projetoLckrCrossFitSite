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
            <a href='https://api.whatsapp.com/send?phone=554898175758&text=Oii%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20plano%20mensal%20da%20LCKR'><button>Mais informações</button></a>
          </div>

          <div className="plano-card destaque">
            <h3>Trimestral</h3>
            <p>Mais constância no treino com melhor custo-benefício.</p>
            <a href='https://api.whatsapp.com/send?phone=554898175758&text=Oii%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20plano%20trimestral%20da%20LCKR'><button>Mais informações</button></a>
          </div>

          <div className="plano-card">
            <h3>Semestral</h3>
            <p>Compromisso com resultados e economia no valor mensal.</p>
            <a href='https://api.whatsapp.com/send?phone=554898175758&text=Oii%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20plano%20semestral%20da%20LCKR'><button>Mais informações</button></a>
          </div>

          <div className="plano-card">
            <h3>Anual</h3>
            <p>Plano mais completo, máxima economia e foco total na evolução.</p>
            <a href='https://api.whatsapp.com/send?phone=554898175758&text=Oii%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20plano%20anual%20da%20LCKR'><button>Mais informações</button></a>
          </div>
        </div>
      </div>
    </section>
  );
}