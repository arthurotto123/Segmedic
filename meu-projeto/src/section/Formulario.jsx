/*Formulario do projeto: Exibe o formulario de contato do projeto */
import '../styles/Formulario.css';
import '../componets/FormButton.css'
import imgform from '../img/atendimento.jpg'

function Formulario() {
    return (
        <section id="Formulario"  >
            <div className="form-section">
                <div>
                    <h3 className="form-title">Entre em contato conosco</h3>
                </div>
                <div className="form-cont">
                    <div className="img-cont">
                    <img className="img-atend" src={imgform} alt="Médico fazendo atendimento" />
                    </div>
                <form className="form">
                    <div className="form-container">
                        <input type="text " name="nome" placeholder="Nome Completo" required/>
                    <input type="text" name="email" placeholder="E-mail" required />
                    <input type="text" name="telefone" placeholder="Telefone de contato (opcional)" />
                    </div>
                   <label>
                         <input type="checkbox" name="contato"  />
                         Aceito contato por <strong>WhatsApp</strong> 
                   </label>
                   <label>
                         <input type="checkbox" name="contato"  />
                         Aceito notificações por <strong>E-MAIL</strong> e <strong>SMS</strong>
                   </label>
                   <button className="formButton">
                      <a href="#">Enviar formulário</a>
                   </button>
                </form>
                </div>
                
                <small> Suas informações estão protegidas. Não eviamos spam.</small>
                </div>
        </section>
    )
}

export default Formulario;