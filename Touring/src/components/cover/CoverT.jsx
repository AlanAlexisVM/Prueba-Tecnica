import React from "react";
import "../../styles/Cover.css";
import coverVideo from "../../media/coverVide.mp4";

const CoverT = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h3>Tableau</h3>
      <p>Ayuda a las personas a ver y comprender los datos</p>
    </div>
  );
};

export default CoverT;