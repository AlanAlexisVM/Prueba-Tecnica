import React from "react";
import Tech from "./Tech";
import "../../styles/About.css";

const AboutTech = () => {
  return (
    //Componente que muestra la tecnologia que utiliza la empresa
    <div className="about-container">
      <div className="about-desc">
        <h3>TECNOLOGIAS QUE UTILIZAMOS</h3>
        <Tech/>
      </div>
    </div>
  );
};

export default AboutTech;