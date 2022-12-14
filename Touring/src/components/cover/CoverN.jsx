import React from "react";
import "../../styles/Cover.css";
import coverVideo from "../../media/coverVideN.mp4";

const CoverN = () => {
  return (
    //Componente que muestra el video de portada de la pagina de Nosotros
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>Nosotros</h1>
      <p>Somos consultores de Big Data</p>
    </div>
  );
};

export default CoverN;