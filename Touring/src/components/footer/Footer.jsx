import React from "react";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Turing Inteligencia Artificial</h1>
        <p>Av. Insurgentes 601
Col. Napoles, Benito Juarez
Ciudad de México, México</p>
      </div>
      <div className="footer-contact">
        <h3>Contacto</h3>
        <p>Telefono de contacto:</p>
      </div>
      <div className="footer-sns">
        <div className="design-by">Design By Alexis Velasco</div>
        <div className="sns-links">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter twitter"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
