import React from "react";
import Button from '@mui/material/Button';
import "../../styles/Navbar.css";

const Navbar = ({ isScrolling }) => {
  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
      <div className="navbar-logo" onClick={toTheTop}>
        Turing IA
        
          <Button variant="text">Inicio</Button>
          <Button variant="text">Nosotros</Button>
          <Button variant="text">Servicios</Button>
          <Button variant="text">Tableau</Button>
          <Button variant="text">Blog</Button>
          <Button variant="text">Contacto</Button>
      </div>
    </nav>
  );
};

export default Navbar;
