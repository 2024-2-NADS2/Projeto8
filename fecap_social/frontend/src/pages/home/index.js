import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./style.css";
import "boxicons/css/boxicons.min.css";

// Importando as páginas
import Projetos from "../projetos/projetos";
import DoatechXfecap from "../DoatechxFecap/DoatechxFecap";
import Doar from "../doar/doar";

// Imagens
import logoGif from "../imagens/F2.gif";
import mascoteImg from "../imagens/mascote.png";
import cambuciImg from "../imagens/cambuci.png";
import socialImg from "../imagens/Social.png";
import doacaoImg from "../imagens/doação.png";
import hamburgImg from "../imagens/hamburg.png";
import entregasImg from "../imagens/entregaporSp.jpg";

const Index = () => {
  return (
    <Router>
      {/* Cabeçalho */}
      <header>
        <div className="container">
          <Link to="/" className="logo">
            <img src={logoGif} alt="GIF" className="logo-gif" />
            Fecap Social
          </Link>
          <nav>
            <ul className="navbar">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/projetos">Projetos</Link>
              </li>
              <li>
                <Link to="/doatechxfecap">Doatech</Link>
              </li>
              <li>
                <Link to="/doar">Doar</Link>
              </li>
            </ul>
          </nav>
          <div className="cta">
            <Link to="/doar" className="btn">
              Doe Agora
            </Link>
          </div>
        </div>
      </header>

      {/* Rotas */}
      <Routes>
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/doatechxfecap" element={<DoatechXfecap />} />
        <Route path="/doar" element={<Doar />} />
      </Routes>

      {/* Seções */}
      <section className="home" id="home">
        <div className="container">
          <div className="home-text">
            <h1>Doe para quem mais precisa</h1>
            <p>
              Contribua para transformar vidas. Cada doação faz a diferença e ajuda a construir um futuro mais justo
              para todos.
            </p>
            <Link to="/doar" className="btn">
              Seja um Doador
            </Link>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="about-img">
              <img src={mascoteImg} alt="Mascote" />
            </div>
            <div className="about-text">
              <h2>Quem Somos?</h2>
              <p>
                A DoaTech é uma plataforma inovadora, dedicada a conectar doadores com organizações que precisam de
                suporte, promovendo solidariedade e transformação social.
              </p>
              <p>
                Com o nosso sistema, você pode apoiar diversas causas de forma rápida, prática e segura. Junte-se a nós
                e faça a diferença na vida de muitas pessoas.
              </p>
              <Link to="#contact" className="btn">
                Saiba Mais
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="futuras" id="futuras">
        <div className="container">
          <h2>Ações Realizadas</h2>
          <div className="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={cambuciImg} alt="Projeto 1" />
                <div className="carousel-caption">
                  <h3>Arrecadação de alimentos</h3>
                  <p>
                    Estaremos arrecadando itens como: proteínas, arroz, alho, cebola, legumes, água e gás.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={socialImg} alt="Projeto 2" />
                <div className="carousel-caption">
                  <h3>Ação Comunitária</h3>
                  <p>
                    Trabalhamos permanentemente junto às empresas para garantir oportunidades de trabalho para os
                    refugiados que nos procuram.
                  </p>
                </div>
              </div>
            </div>

            <a className="carousel-control-prev" href="#futuras" role="button">
              &#10094;
            </a>
            <a className="carousel-control-next" href="#futuras" role="button">
              &#10095;
            </a>
          </div>
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="container">
          <h2>Ações futuras</h2>
          <div className="project-items">
            <div className="project-item">
              <img src={doacaoImg} alt="Projeto 1" />
              <p>
                Venha ser um doador no dia 09/11 às 12h, estaremos em frente ao Hospital Beneficência Portuguesa para
                doar sangue. Você é nosso convidado de honra!
              </p>
            </div>
            <div className="project-item">
              <img src={hamburgImg} alt="Projeto 2" />
              <p>
                Seja um voluntário no Hamburgada Feliz! Com 50 reais, você ajudará crianças e ainda ganhará brindes
                exclusivos, sendo aluno ou não da FECAP!
              </p>
            </div>
            <div className="project-item">
              <img src={entregasImg} alt="Projeto 3" />
              <p>
                O Entregar Educação, realiza trabalho voluntário em diversas comunidades, fazendo entregas de alimentos,
                roupas e itens essenciais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer>
        <div className="container">
          <p>&copy; 2024 DoaTech. Todos os direitos reservados.</p>
          <div className="socials">
            <a href="#">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#">
              <i className="bx bxl-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </Router>
  );
};

export default Index;
