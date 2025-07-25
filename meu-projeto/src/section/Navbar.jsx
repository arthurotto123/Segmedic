/*Navbar do projeto: Exibe a logo e rotas */

import React, { useState } from "react";
import '../styles/Navbar.css';
import logo from '../img/ChatGPT_Image_24_de_jul._de_2025__20_56_21-removebg-preview.png'
import '../components/logo.css'
import '../components/Formbutton.css'
import 'remixicon/fonts/remixicon.css';


function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false);
        }
    };
    return (
        <section className="navbar-section">
            <div className="navbar-title"><h1><a href="#Formulario">Economize até 70%, Saúde de Qualidade com Descontos que Cabem no Seu Bolso!</a></h1></div>
            <nav className="navbar">
                <div className="navbar-header">
                <div className="logo" id="nav-logo">
                    <img src={logo} alt="Logo da Landing page" />
                </div>
                

                 <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    <i className="ri-align-justify"></i>
                </button>
                </div>
                 

                <ul className={`navbar-links ${menuOpen ? 'show' : ''}`}>
                    <li><button onClick={() => scrollToSection('Home')}>Home</button></li>
                    <li><button onClick={() => scrollToSection('Beneficios')}>Beneficios</button></li>
                    <li><button onClick={() => scrollToSection('Sobre')}>O que é?</button></li>
                    <li><button onClick={() => scrollToSection('ComoFunciona')}>Como Funciona</button></li>

                </ul>

                <button id="nav-button" className="formButton">
                    <a href="#Formulario">Quero o Plano com Desconto</a>
                </button>


            </nav>
        </section>
    )
}

export default Navbar;