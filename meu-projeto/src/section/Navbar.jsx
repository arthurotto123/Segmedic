/*Navbar do projeto: Exibe a logo e rotas */

import React, { useState } from "react";
import '../styles/Navbar.css';
import logo from '../img/log-segmedic.png'
import '../componets/logo.css'
import '../componets/Formbutton.css'


function Navbar() {
    return (
        <section className="navbar-section">
            <div className="navbar-title"><h1><a href="#">🔥 Economize até 70% em Saúde, Bem-Estar e Qualidade de Vida com o Cartão VidaLeve!</a></h1></div>
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt="Logo da Landing page" />
                </div>

                <ul className="navbar-links">
                    <li><button onClick={() => scrollToSection('Home')}>Home</button></li>
                    <li><button onClick={() => scrollToSection('Sobre')}>Sobre</button></li>
                    <li><button onClick={() => scrollToSection('Beneficios')}>Beneficios</button></li>
                    <li><button onClick={() => scrollToSection('ComoFunciona')}>Como funciona?</button></li>
                    <li><button onClick={() => scrollToSection('Contato')}>Contato</button></li>

                </ul>

                <button className="formButton">
                    <a href="#">Quero o Cartão com Desconto</a>
                </button>


            </nav>
        </section>
    )
}

export default Navbar;