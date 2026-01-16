import './menu.css'
import Logo from '../assets/lckrLogosemfundo.png'



function Menu() {

  return (
    <div className='divmenu'>
        <img className='logo' src={Logo} alt="Logo" width="120" />
        <button onClick={() => window.open("https://api.whatsapp.com/send?phone=554898175758&text=Oii%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20planos%20da%20LCKR", "_blank")} className='buttonzap'><i className="fa-brands fa-whatsapp"></i> FALAR NO WHATSAPP</button>
        <div className='textoDiv'>
        <p className='texto'>Crossfit em criciúma é na LCKR.</p>
        <h1 className='textoPrincipal'>SUPERE SEUS LIMITES</h1>
        <p className='terceiroTexto'>TRANFORMARMOS ESFORÇO EM RESULTADOS E AMIZADE EM FAMILIA</p>
        <a href='https://api.whatsapp.com/send?phone=554898175758&text=Oii%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20planos%20da%20LCKR'><button className='buttonExperimental'>Venha fazer uma aula conosco</button></a>
        
        <a href='https://api.whatsapp.com/send?phone=554898175758&text=Oii%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20planos%20da%20LCKR'><button className='whatsapp'><i className="fa-brands fa-whatsapp"></i></button></a>
        </div>
        

    </div>
    
  )
}

export default Menu
