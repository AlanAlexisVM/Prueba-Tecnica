import React, { useState, useEffect } from "react";
import "../styles/App.css";
import Cover from "../components/cover/Cover";
import Navba from "../components/navbar/Navba";
import About from "../components/about/About";
import Slider from "../components/slider/Slider";
import Info from "../components/info/Info";
import Footer from "../components/footer/Footers";
import Contact from "../components/contact/Contact";

function Blog() {
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
      <Navba/>
      <Cover />
      <Footer />
    </div>
  );
}

export default Blog;