/*Footer do projeto: Exibe as considerações finais do projeto */
import '../styles/Footer.css';
import logo from '../img/log-segmedic.png'
import 'remixicon/fonts/remixicon.css'


function Footer() {

    const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
    setShowMobileMenu(false);
  };

  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };


    return (
        <section className="footer-section">
          

            <div  >
                <h3>Entre em contato</h3>
                <div className="footer-contato">
                <i class="ri-customer-service-2-fill">Central de Ajuda</i>
                <i class="ri-mail-line">segmedic@gmail.com</i>
                </div>
            </div>
        

             <div>
                <h3>Local</h3>
                <ul>
                    <li><i className="ri-map-pin-fill">Nova Iguaçu</i></li>
                    <li><i className="ri-map-pin-fill">Miguel Couto</i></li>
                    <li><i className="ri-map-pin-fill">Nilópolis</i></li>
                    <li><i className="ri-map-pin-fill">São João de Meriti</i></li>
                    <li><i className="ri-map-pin-fill">Campo Grande</i></li>
                    <li><i className="ri-map-pin-fill">Méier</i></li>
                </ul>
            </div>

            <div>
                <h3>A Segmedic</h3>
                <ul>
                    <li><button onClick={() => scrollToSection('Home')}>Home</button></li>
                    <li><button onClick={() => scrollToSection('Beneficios')}>Beneficios</button></li>
                    <li><button onClick={() => scrollToSection('Sobre')}>O que é?</button></li>
                    <li><button onClick={() => scrollToSection('ComoFunciona')}>Como Funciona?</button></li>
                    
                </ul>
            </div>

              <div>
                <img src={logo} alt="" />
            </div>

            <hr />

            <p>&copy;2025 - @arthurotto123</p>



           

        </section>
    )
}
export default Footer;