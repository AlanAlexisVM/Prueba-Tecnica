import React, { useState, useEffect } from "react";
import "../styles/App.css";
import Cover from "../components/cover/CoverN";
import Navba from "../components/navbar/Navba";
import Footer from "../components/footer/Footers";
import Info from "../components/info/Info";
import Partners from "../components/info/Partners";

function Nosotros() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);

  return (
    <div className="App">
      <Navba />
      <Cover />
      <Info image = "https://www.turing-ia.com/assets/img/nosotros.webp" title = "¿QUIENES SOMOS?" tex = "Somos una empresa Consultora de Big Data en México, desde hace 13 años proporcionamos servicios en Business Analytics mediante Knowledge Discovery in Database (KDD). Somos un grupo de especialistas en proyectos de Business Analytics con más de 13 años de experiencia. realizando análisis descriptivos, predictivos y prescriptivos."/>
      <Info image = "https://www.turing-ia.com/assets/img/cer-pmi.jpg" title = "Certificados por el (PMI® e IPMA® )" tex = "Profesionales con conocimientos y competencias acreditadas ante organismos nacionales (CONOCER) e internacionales (PMI® e IPMA®). - Aplicación e impacto inmediato en mejores prácticas para administrar proyectos dentro de las organizaciones. - Incremento en la capacidad para realizar más y mejores proyectos. - Líderes de equipos de trabajo altamente orientados a lograr los resultados que contribuyen a los objetivos estratégicos de la organización."/>
      <Info image = "https://www.turing-ia.com/assets/img/scrumn.jfif" title = "SCRUM" tex = "Profesionales con conocimientos y competencias acreditadas De todas las formas que existen para poder desarrollar software, únicamente de manera colaborativa es como se logra. Es por eso que aplicamos la metodología Scrum para llevar más allá tus objetivos"/>
      <Info image = "https://www.turing-ia.com/assets/img/data-driven.jpg" title = "Data Driven" tex = "Tomamos decisiones estratégicas basadas en la interpretación y el análisis de datos. Es decir, se trata de ver la manera cómo se estructuran y organizan los datos con el fin de aplicarlos a su negocio y mejorar sus estrategias."/>
      <Partners />
      <Footer />
    </div>
  );
}

export default Nosotros;