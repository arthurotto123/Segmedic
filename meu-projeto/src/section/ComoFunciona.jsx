/*comoFunciona do projeto: Exibe flashcards monstrando o passo a passo do produto */
import React, { useState } from "react";
import '../styles/ComoFunciona.css';
import comoimg from '../img/como-img.jpg'


function ComoFunciona() {
    return (
        <section id="ComoFunciona" className="como-section">
            <div className="como-container">
                <h3>Como adiquirir um cartão?</h3>
                <div className="como-list">
                    <div className="como-element">
                        <p><span>1.</span> Preencha o formulário</p>
                    </div>
                     <div className="como-element">
                        <p><span>2.</span> Receba seu cartão digital por e-mail</p>
                    </div>
                     <div className="como-element">
                        <p><span>3.</span> Use nos estabelecimentos parceiros</p>
                    </div>
                     <div className="como-element">
                        <p><span>4.</span> Economize todos os meses!</p>
                    </div>
                    
                </div>
            </div>
            <img className="como-img" src={comoimg} alt="" />
        </section>
    )
}

export default ComoFunciona;