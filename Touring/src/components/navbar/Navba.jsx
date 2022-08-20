import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './Navbars';

const Navba = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          Touring IA
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle>
          Inicio
          </NavLink>
          <NavLink to='/Nosotros' activeStyle>
          Nosotros
          </NavLink>
          <NavLink to='/Servicios' activeStyle>
          Servicios
          </NavLink>
          <NavLink to='/Tableau' activeStyle>
          Tableau
          </NavLink>
          <NavLink to='/Blog' activeStyle>
          Blog
          </NavLink>
          <NavLink to='/Contacto' activeStyle>
          Contacto
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navba;
