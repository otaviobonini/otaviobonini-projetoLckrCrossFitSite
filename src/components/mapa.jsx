import './mapa.css'

function Mapa() {

  return (
    <div className="mapa-container">
        <h1 className='mapText'>CONHEÇA O NOSSO <span className="destaque">BOX</span></h1>
      <iframe
        title="Localização LCKR CrossFit"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.924648301961!2d-49.37388582357613!3d-28.6919005698843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952183fba9400a03%3A0x3b54652a20391608!2sLCKR%20CrossFit!5e0!3m2!1spt-BR!2sbr!4v1765689419255!5m2!1spt-BR!2sbr"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  )
}

export default Mapa
