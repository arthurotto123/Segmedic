/*Chamada do projeto: Exibe uma chamada */
import '../styles/Chamada.css';
import '../componets/FormButton.css'


function Chamada() {
    return (
        <section className="chamada-section">
            <h2>Pronto para começar a economizar com o plano Vidaleve?</h2>
            <p>Leva menos de 1 minuto para se inscrever. Cuidar da Saúde Nunca Foi Tão Acessível.</p>
                <button className="formButton"><a href="#Formulario">Sim, quero meu desconto agora</a></button>
        </section>
    )
}

export default Chamada;