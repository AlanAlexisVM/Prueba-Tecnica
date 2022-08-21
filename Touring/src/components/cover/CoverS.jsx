import React from "react";
import "../../styles/Cover.css";
import coverVideo from "../../media/coverVideS.mp4";

const CoverS = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>Servicios</h1>
      <p>Tenemos una gran gama de soluciones para llevar al máximo el nivel tu compañia</p>
    </div>
  );
};

export default CoverS;