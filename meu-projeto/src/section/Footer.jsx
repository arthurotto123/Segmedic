import React, { useState } from "react";
import '../styles/Footer.css';
import logo from '../img/log-segmedic.png'
import 'remixicon/fonts/remixicon.css'


function Footer() {
    return (
        <section className="footer-section">
          

            <div >
                <h3>Entre em contato</h3>
                <i class="ri-customer-service-2-fill">Central de Ajuda</i>
                <i class="ri-mail-line">segmedic@gmail.com</i>
            </div>
        

             <div>
                <h3>Local</h3>
                <ul>
                    <li><i className="ri-map-pin-fill"></i> Nova Iguaçu</li>
                    <i className="ri-map-pin-fill"> Miguel Couto</i>
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
                    <li><button onClick={() => scrollToSection('Sobre')}>Sobre</button></li>
                    <li><button onClick={() => scrollToSection('Hardskills')}>Hard Skills</button></li>
                    <li><button onClick={() => scrollToSection('Projetos')}>Projetos</button></li>
                    <li><button onClick={() => scrollToSection('Contato')}>Contato</button></li>
                    <li></li>
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