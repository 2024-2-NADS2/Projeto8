import React from "react";
import { Link } from "react-router-dom";
import logoGif from "../imagens/F2.gif";
import logoDoatech from "../imagens/Logo1DOA.jpg";
import fecapSocialPB from "../imagens/fecap_socialPB.png"
import "./DoatechxFecap.css";
import "boxicons/css/boxicons.min.css";

const DoatechXfecap = () => {
  return (
    <>
      <div>
        

        <div className="project-header">DoaTech x Fecap</div>

        <div className="content">
          <div className="box">
            <img src={logoDoatech} alt="Imagem DoaTech" className="image" />
            <div className="text">
              <h3>DoaTech</h3>
              <p>
                A DoaTech é um projeto desenvolvido por estudantes do curso de
                Análise e Desenvolvimento de Sistemas (ADS) da FECAP, com o
                propósito de transformar a solidariedade em ação prática e
                eficiente.
              </p>
              <p>
                Em parceria com a FECAP Social, a DoaTech surge como uma solução
                inovadora para conectar doadores a instituições que apoiam
                causas essenciais.
              </p>
            </div>
          </div>

          <div className="box">
            <div className="text">
              <h3>Fecap Social</h3>
              <p>
                A FECAP Social é uma organização estudantil da Fundação Escola
                de Comércio Álvares Penteado (FECAP), formada por alunos de
                graduação dos cursos da instituição, onde são divididos nas
                áreas de Comunicação, Financeiro e Projetos.
              </p>
              <p>
                Possui um portfólio com ações, que são realizadas durante o ano
                letivo, buscando oferecer assistência a causas de
                vulnerabilidade social, que envolvem Crianças e Adolescentes,
                Idosos, Mulheres, Moradores de Rua, Comunidade LGBTQI+,
                Comunidade Negra e outros.
              </p>
            </div>
            <img src={fecapSocialPB} alt="Imagem Fecap Social" className="image" />
          </div>
        </div>

        
      </div>
    </>
  );
};

export default DoatechXfecap;
