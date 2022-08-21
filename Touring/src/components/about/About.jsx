import React from "react";
import AboutKDD from "./AboutKDD";
import AboutPerform from "./AboutPerform";
import AboutTech from "./AboutTech";
import "../../styles/About.css";

const About = () => {
  //Componente padre de About que junta la información de los componentes AboutKDD, AboutPerform y AboutTech de la pagina principal
  return (
    <>
      <AboutPerform />
      <AboutKDD />
      <AboutTech />
    </>
  );
};

export default About;
