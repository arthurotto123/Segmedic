/*Beneficios do projeto: Exibe a tela de beneficios do plano */
import React, {useState, useEffect} from "react";
import '../styles/Beneficios.css';
import '../componets/FormButton.css'
import imgBeneclinica from '../img/bene-clinica.jpg'
import imgBenefarmacia from '../img/bene-farmacia.jpeg'
import imgBeneremoto from '../img/bene-remoto.avif'
import imgBenedependentes from '../img/bene-dependentes.avif' 



function Beneficios() {
   const [index, setIndex] = useState(0);

  const quadros = [
    <div id="Beneficios" className="bene-section">
        
                
                <img src={imgBeneclinica} alt="imagem de uma clínica" />
                <div className="bene-list">
                <i className="ri-hospital-line"></i>
                
                <h3>Consultas Médicas</h3> 
                <ul>
                    <li>Desconto exclusivo em clínicas e parcerias credenciadas</li>
                    <hr />
                    <li>Agendamento simples e rápido</li>
                    <hr />
                    <li>Especialistas em diversas áreas: cardiologia, ortopedia, pediatria, entre outras</li>
                    <hr />
                    <li>Atendimento presencial e teleconsulta para sua comodidade</li>
                    <hr />
                </ul>
                <button className="button-bene">
                   <a href="#">Saiba mais</a>
                </button>
                </div>
           
            
    </div>,
    <div className="bene-section">
      
                <img src={imgBenefarmacia} alt="imagem de uma farmácia" />
                 <div className="bene-list">
                  <i className="ri-capsule-fill"></i>
                <h3>Farmácias</h3> 
                <ul>
                    <li>Até 50% de desconto em medicamentos e produtos de saúde</li>
                    <hr />
                    <li>Rede conveniada em todo o país</li>
                    <hr />
                    <li>Promoções exclusivas para associados</li>
                    <hr />
                    <li>Ofertas especiais em vitaminas, suplementos e produtos naturais</li>
                    <hr />

                </ul>
                <button className="button-bene">
                   <a href="#">Saiba mais</a>
                </button>
                </div>
            
    </div>,
    <div className="bene-section">
      
                <img src={imgBeneremoto} alt="" />
                <div className="bene-list">
                <i className="ri-customer-service-2-fill"></i>
                 
                <h3>Telemedicina</h3>
               <ul>
                <li>Atendimento remoto disponível 24h por dia, 7 dias por semana</li>
                <hr />
                <li>
                    Sem custo adicional para os associados
                </li>
                <hr />
                <li>
                    Consulta com profissionais qualificados sem sair de casa
                </li>
                <hr />
                <li>
                    Receba orientações, prescrições e encaminhamentos rapidamente
                </li>
                <hr />
               </ul>
               <button className="button-bene">
                   <a href="#">Saiba mais</a>
                </button>
               </div>
    </div>,
    <div className="bene-section">
      
                <img src={imgBenedependentes} alt="" />
                <div className="bene-list">
                <i className="ri-group-fill"></i>
                 
                <h3>Dependentes</h3>
                <ul>
                    <li>Inclusão fácil de filhos, cônjuges, pais ou outros dependentes</li>
                    <hr />
                    <li>
                        Gestão simplificada para toda a família
                    </li>
                    <hr />
                    <li>
                        Acesso aos benefícios para todos com um único pagamento mensal
                    </li>
                    <hr />
                    <li>
                        Economia e praticidade para seu grupo familiar
                    </li>
                    <hr />
                </ul>
                <button className="button-bene">
                   <a href="#">Saiba mais</a>
                </button>
                </div>
    </div>
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % quadros.length);
    }, 6000); 

    return () => clearInterval(interval);
  }, [quadros.length]);

  return (
    <section className="bene-cont">

      <h2>Beneficios do seu Plano <span className="VidaLeve">VidaLeve</span></h2>
      

      <div className="beneficio-container">
        <div className="slider-bene">
          <div
            className="slider-track-bene"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {quadros.map((quadro, i) => (
              <div className="quadro-wrapper" key={i}>
                {quadro}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Beneficios;
