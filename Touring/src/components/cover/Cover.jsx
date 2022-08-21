import React from "react";
import "../../styles/Cover.css";
import coverVideo from "../../media/coverVide.mp4";

const Cover = () => {
  //Componente que muestra el video de portada de la pagina principal
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>Turing IA</h1>
      <h3>Bienvenido</h3>
      <p>Hacemos los datos faciles de usar</p>
    </div>
  );
};

export default Cover;
