import React, { useState, useEffect } from "react";
import "../styles/App.css";
import Cover from "../components/cover/CoverS";
import Navba from "../components/navbar/Navba";
import About from "../components/about/About";
import Slider from "../components/slider/Slider";
import Info from "../components/info/Info";
import Footer from "../components/footer/Footers";
import Contact from "../components/contact/Contact";
import Service from "../components/services/Service";

function Servicios() {

  return (
    <div className="App">
      <Navba />
      <Cover />
      <Service />
      <Footer />
    </div>
  );
}

export default Servicios;