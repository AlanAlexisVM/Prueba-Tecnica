import React from "react";
import "../../styles/Cover.css";
import coverVideo from "../../media/coverVideC.mp4";

const CoverC = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>Turing IA</h1>
      <h3>Bienvenido</h3>
      <p>Hacemos los datos faciles de usar</p>
    </div>
  );
};

export default CoverC;