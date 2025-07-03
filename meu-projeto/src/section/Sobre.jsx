/*Sobre do projeto: Exibe exibe uma explicação aprofundada sobre o produto apresentado*/import React, { useState } from "react";
import '../styles/Sobre.css';


function Sobre() {
    return (
        <section id="Sobre" className="sobre-section">
            <h2 className="sobre-title">Como Funciona o cartão VidaLeve Saúde?</h2>
            <p className="p-sobre">O <span>Cartão VidaLeve Saúde</span> é uma nova forma de economizar com saúde e bem-estar. Ele garante acesso a uma rede de serviços com <span>até 70% de desconto</span> tudo de forma simples e acessível.</p>
            <p className="p-sobre">Preço especial de lançamento: de  <span><del>  R$ 89,90</del></span>  por <span>R$59,90</span></p>

            <button className="formButton">
                <a href="#Formulario">Quero Economizar Agora</a>
            </button>

            

        </section>

        
    )
}

export default Sobre;