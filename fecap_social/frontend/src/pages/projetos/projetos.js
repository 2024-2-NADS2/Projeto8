import React from 'react';
import './projetos.css'; // Importando o arquivo CSS

// Imagens
import logoGif from '../imagens/F2.gif';
import projeto1 from '../imagens/doação.png';
import projeto2 from '../imagens/hamburg.png';
import projeto3 from '../imagens/cambuci.png';
import projeto4 from '../imagens/entregaporSp.jpg';
import projeto5 from '../imagens/sosRs.jpg';
import projeto6 from '../imagens/pascoaS.jpg';

import { Link } from "react-router-dom";


function Projetos() {
  return (
    <>
    <div>
      

      <div className="project-header">Projetos</div>

      <div className="project-items">
        <div className="project-item">
          <img src={projeto1} alt="Projeto 1" />
          <p>Venha ser um doador no dia 09/11 às 12h, estaremos em frente ao Hospital Beneficência Portuguesa para doar sangue. Você é nosso convidado de honra.</p>
        </div>
        <div className="project-item">
          <img src={projeto2} alt="Projeto 2" />
          <p>Seja voluntário no Hamburgada Feliz! Com 50 reais, você ajuda crianças e ainda ganha brindes exclusivos, sendo aluno ou não da Fecap.</p>
        </div>
        <div className="project-item">
          <img src={projeto3} alt="Projeto 3" />
          <p>Ajude o Cambuci Solidário! Arrecadaremos itens de higiene, alimentos e dinheiro entre os dias 04 a 08 de março.</p>
        </div>
        <div className="project-item">
          <img src={projeto4} alt="Projeto 4" />
          <p>Participe do Entregar Educação! Trabalhos voluntários e entrega de itens essenciais para comunidades.</p>
        </div>
        <div className="project-item">
          <img src={projeto5} alt="Projeto 5" />
          <p>Dia 18/05, participe da palestra com o economista Caio Schettino. Além disso, faça doações para o pessoal do RS.</p>
        </div>
        <div className="project-item">
          <img src={projeto6} alt="Projeto 6" />
          <p>Apoie a Páscoa Solidária: doe R$10 e apadrinhe uma criança da ONG Nossa Casa Grajaú.</p>
        </div>
      </div>

      
    </div>
    </>
  );
}

export default Projetos;
