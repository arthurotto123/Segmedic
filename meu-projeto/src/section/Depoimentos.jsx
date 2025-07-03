/*Depoimentos: Exibe depoimento de clientes */
import '../styles/Depoimentos.css';
import  imgbruna from '../img/bruna-img.avif'
import imgcarlos from '../img/carlos-img.jpg'
import imgluciana from '../img/luciana-img.jpg'
import imgandre from '../img/andre-img.jpg'

function Depoimentos() {
    return (
        <section className="depo-section">
            <h3>O que nossos clientes dizem? </h3>
            <div className="depo-container">

            <div id="ele1" className="depo-element">
                <img src={imgbruna} alt="foto do cliente" />
                
                <div className="depo-element-filho">
                <p><span>Bruna Oliveira</span> 27 anos</p>
                <p>"Eu não tinha plano de saúde e pagava caro por consultas. Com o VidaLeve, fiz exame e ainda fui ao nutricionista por metade do preço. Salvou meu orçamento!"</p>
            </div>
            </div>
            <div id="ele2" className="depo-element ">
                <img src={imgcarlos} alt="foto do cliente" />
                <div className="depo-element-filho">
                <p><span>Carlos Mendes</span> 42 anos</p>
                <p>"Com o plano de descontos consegui fazer meus exames de rotina gastando menos da metade. Atendimento rápido e sem fila. Recomendo muito!"</p>
                </div>
            </div>
             <div id="ele3" className="depo-element">
                <img src={imgluciana} alt="foto do cliente" />
                <div className="depo-element-filho">
                <p><span>Luciana Silva</span> 35 anos</p>
                <p>"Levei meu filho ao pediatra usando o plano VidaLeve e foi super em conta. É uma alternativa ótima. Vale a pena!"</p>
                </div>
            </div>
             <div id="ele4" className="depo-element">
                <img src={imgandre} alt="André Santos" />
                <div className="depo-element-filho">
                <p><span>Luciana Silva</span> 29 anos</p>
                <p>"Economizei mais de R$ 300 em tratamentos dentários. O atendimento foi excelente e o desconto realmente funciona. Estou muito satisfeito!"</p>
                </div>
            </div>

            </div>


        </section>
    )
}

export default Depoimentos;