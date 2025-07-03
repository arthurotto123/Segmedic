/*Sobre do projeto: Exibe exibe uma explicação aprofundada sobre o produto apresentado 

*/


import '../styles/Sobre.css';


function Sobre() {
    return (
        <section id="Sobre" >
            <h2 className="sobre-title">Como Funciona o plano <span className="VidaLeve">VidaLeve</span> Saúde?</h2>
            <p className="p-sobre">O <span>Plano VidaLeve</span> é uma nova forma de economizar com saúde e bem-estar. Ele garante acesso a uma rede de serviços com <span>até 70% de desconto</span> tudo de forma simples e acessível.</p>

            <div className="sobre-cards">
                <div className="card">
                    <div className="card-top">
                        <h3>Anual</h3>
                        <p>Até 4 pessoas</p>
                        <hr />

                    </div>
                    <div className="card-info">

                        <p>Nosso plano mais vantajoso!
                            Cobertura total para até 4 pessoas.
                            Descontos exclusivos e benefícios extras.
                            Um ano inteiro de saúde e tranquilidade.</p>

                        <p> Planos a partir de 12x <span> R$119.90</span></p>

                        <button className="formButton" id="card-bt">
                            <a href="#Formulario">Economizar Agora</a>
                        </button>

                    </div>
                </div>

                <div className="card">
                    <div className="card-top">
                        <h3>Semestral</h3>
                        <p>Até 4 pessoas</p>
                        <hr />

                    </div>
                    <div className="card-info">

                        <p>Economia garantida por 6 meses.
                            Cobertura para até 4 pessoas.
                            Mais benefícios por um valor reduzido.
                            Perfeito para quem quer segurança com desconto.</p>

                        <p> Planos a partir de 6x <span> R$149.90</span></p>

                        <button className="formButton" id="card-bt">
                            <a href="#Formulario">Economizar Agora</a>
                        </button>

                    </div>
                </div>

                <div className="card">
                    <div className="card-top">
                        <h3>Mensal</h3>
                        <p>Até 4 pessoas</p>
                        <hr />

                    </div>
                    <div className="card-info">

                        <p>Ideal para quem busca praticidade.
                            Ativação imediata e sem fidelidade.
                            Cobertura completa para até 4 pessoas.
                            Pague mês a mês, sem compromisso.

                        </p>

                        <p> Planos a partir de 1x <span> R$189.90</span></p>

                        <button className="formButton" id="card-bt">
                            <a href="#Formulario">Economizar Agora</a>
                        </button>

                    </div>
                </div>
            </div>






        </section>


    )
}

export default Sobre;