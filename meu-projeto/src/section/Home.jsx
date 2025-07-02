
import React, { useState, useEffect } from "react";
import '../styles/Home.css';
import '../componets/FormButton.css'




function Home() {
  
  return (
    <section className="home-section">
      <h1>Cartão<span> VIDALEVE</span></h1>
      <div className="home">
        <h2 className="home-title">Descontos Reais em Saúde, Bem-Estar e Qualidade de Vida</h2>

        <p className="p-home">
          Conheça o <span>Cartão VidaLeve Saúde</span> e economize em consultas, exames, farmácias,
          academias e muito mais. Sem burocracia, sem plano de saúde.
        </p>

        <button className="formButton">
          <a href="#">Quero Meu Desconto</a>
        </button>
      </div>

    </section>


  );
}

export default Home;
