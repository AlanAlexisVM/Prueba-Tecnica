import React from "react";
import "../../styles/Cover.css";
import coverVideo from "../../media/coverVideT.mp4";

const CoverT = () => {
  return (
    //Componente que muestra el video de portada de la pagina de Tableau
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>Tableau</h1>
      <p>Ayuda a las personas a ver y comprender los datos</p>
    </div>
  );
};

export default CoverT;