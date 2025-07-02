
import React, {useState, useEffect} from "react";
import '../styles/Beneficios.css';
import '../componets/FormButton.css'
import imgHomeclinica from '../img/home-clinica.jpg'
import imgHomefarmacia from '../img/home-farmacia.jpeg'
import imgHomeremoto from '../img/home-remoto.avif'
import imgHomedependentes from '../img/home-dependentes.avif'



function Beneficios() {
   const [index, setIndex] = useState(0);

  const quadros = [
    <div className="bene-section">
        
                
                <img src={imgHomeclinica} alt="imagem de uma clínica" />
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
      
                <img src={imgHomefarmacia} alt="imagem de uma farmácia" />
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
      
                <img src={imgHomeremoto} alt="" />
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
      
                <img src={imgHomedependentes} alt="" />
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
    }, 8000); // altera o tempo de mudança de quadro

    return () => clearInterval(interval);
  }, [quadros.length]);

  return (
    <section className="bene-cont">
      

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
