/*Home do projeto: Exibe a tela de home do projeto */
import '../styles/Home.css';
import '../styles/Formbutton.css'




function Home() {
  
  return (
    <section id="Home" className="home-section">
      <h1>Plano<span className="VidaLeve"> VIDALEVE</span></h1>
      <div className="home">
        <h2 className="home-title">Seu Acesso à Saúde com Descontos Exclusivos em Todo o Brasil!</h2>

        <p className="p-home">
          Conheça o <span>Plano VidaLeve Saúde</span> e economize em consultas, exames, farmácias,
          academias e muito mais. Sem burocracia, sem plano de saúde.
        </p>

        <button className="formButton">
          <a href="#Formulario">Quero Meu Desconto</a>
        </button>
      </div>

    </section>


  );
}

export default Home;
