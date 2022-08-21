import React from "react";
import "../../styles/Cover.css";
import coverVideo from "../../media/coverVideB.mp4";

const CoverB = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>Blog</h1>
      <p>Los grandes conocimientos engendran las grandes dudas.</p>
    </div>
  );
};

export default CoverB;