import './menu.css'
import Logo from '../assets/lckrLogosemfundo.png'



function Menu() {

  return (
    <div className='divmenu'>
        <img className='logo' src={Logo} alt="Logo" width="120" />
        <button className='buttonzap'><i className="fa-brands fa-whatsapp"></i> FALAR NO WHATSAPP</button>
        <div className='textoDiv'>
        <p className='texto'>Crossfit em criciúma é na LCKR.</p>
        <h1 className='textoPrincipal'>SUPERE SEUS LIMITES</h1>
        <p className='terceiroTexto'>TRANFORMARMOS ESFORÇO EM RESULTADOS E AMIZADE EM FAMILIA</p>
        <button className='buttonExperimental'>Venha fazer uma aula conosco</button>
        
        <button className='whatsapp'><i className="fa-brands fa-whatsapp"></i></button>
        </div>
        

    </div>
    
  )
}

export default Menu
