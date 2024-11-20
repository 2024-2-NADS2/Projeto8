import React from "react";
import "./doar.css"; // Certifique-se de que o arquivo CSS está no mesmo diretório
import "boxicons/css/boxicons.min.css";

// Importe as imagens para que o Webpack possa processá-las corretamente
import logoGif from "../imagens/F2.gif";
import qrcodeImage from "../imagens/qrcode.jfif";

function Doar() {
  return (
    <>

      <div className="title-box">
        <h1>Como doar?</h1>
      </div>

      <div className="main-container"></div>
      <div className="donation-box">
        <h2>Contribua com a nossa causa</h2>
        <p>
          Você pode enviar doações diretamente para o seguinte endereço de
          e-mail:
        </p>
        <div className="email-box">
          <a href="mailto:fecapsocial@gmail.com">fecapsocial@gmail.com</a>
        </div>
        <p>Obrigado por apoiar nossas iniciativas sociais!</p>
      </div>

      <div className="content-box">
        <h2>Doações</h2>
        <p>
          Além das ações promovidas pela FECAP Social para a arrecadação de
          doações, a organização também aceita contribuições via Pix. Participe
          dessa causa e faça já a sua doação!
        </p>
        <img
          src={qrcodeImage}
          alt="Imagem ilustrativa"
          className="content-image"
        />
      </div>

    </>
  );
}

export default Doar;
