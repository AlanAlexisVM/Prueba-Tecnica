import React, { useState, useEffect } from "react";
import "../styles/App.css";
import Cover from "../components/cover/CoverN";
import Navba from "../components/navbar/Navba";
import Footer from "../components/footer/Footers";

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
      <Footer />
    </div>
  );
}

export default Nosotros;