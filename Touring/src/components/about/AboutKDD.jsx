import React from "react";
import "../../styles/About.css";

const AboutKDD = () => {
  return (
    //Componente que muestra la información de la empresa KDD
    <div className="about-container">
      <div className="about-desc">
        <h3>LA MANERA IDEAL PARA MANEJAR TUS DATOS</h3>
        <p>
        Somos una empresa Consultora de Big Data en México, desde hace 13 años proporcionamos servicios en Business Analytics mediante Knowledge Discovery in Database (KDD).
        </p>
      </div>
      <div className="about-img">
        <img
          src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_960_720.jpg"
          alt="about"
        />
      </div>
    </div>
  );
};

export default AboutKDD;