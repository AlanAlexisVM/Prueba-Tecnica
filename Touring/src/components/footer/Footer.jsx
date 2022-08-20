import React from "react";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="">
        <h1>Turing Inteligencia Artificial</h1>
        <p>Av. Insurgentes 601
        Col. Napoles, Benito Juarez
        Ciudad de México, México</p>
        <p>Telefono de contacto:</p>
        <p>+52 (722) 936-96-65</p>
        <p>Correo electrónico:</p>
        <p>contacto@turing-ia.com</p>
      </div>
      <div className="footer-services">
        <h3>Nuestros servicios</h3>
        <p>Implementación de Proyectos (Business Analyst)</p>
        <p>Workshop (Blue Print)</p>
        <p>Capacitación</p>
        <p>Venta de Software</p>
        <p>Venta de Hardware</p>
        <p>Desarrollo de Aplicaciones</p>
        <p>Balanced Scorecard</p>
      </div>
      <div className="">
        <h1>Inscribete a nuestro newsletter</h1>
        <h1>Siguenos en nuestras redes sociales</h1>
        
      </div>
      <div className="footer-sns">
        <div className="sns-links">
          <a href="https://www.linkedin.com/company/turing-inteligencia-artificial/?originalSubdomain=mx" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://twitter.com/IaTuring" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter twitter"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100072141934213" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
