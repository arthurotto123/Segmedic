/*Chamada do projeto: Exibe uma chamada */
import React, { useState } from "react";
import '../styles/Chamada.css';
import '../componets/FormButton.css'


function Chamada() {
    return (
        <section className="chamada-section">
            <h2>Pronto para começar a economizar com o cartão Vidaleve?</h2>
            <p>Leva menos de 1 minuto para se inscrever. Sua saúde e bem-estar merecem esse cuidado.</p>
                <button className="formButton"><a href="#">Sim, quero meu desconto agora</a></button>
        </section>
    )
}

export default Chamada;