import React from "react";
import "../../styles/Cover.css";
import coverVideo from "../../media/coverVide.mp4";

const CoverN = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h3>Nosotros</h3>
      <p>Somos consultores de Big Data</p>
    </div>
  );
};

export default CoverN;