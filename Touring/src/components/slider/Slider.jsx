import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "./Slides";
import "../../styles/Slider.css";

const Slider = () => {
  return (
    //Componente que muestra el carrusel de imagenes
    <div className="carousel-container">
      <div className="carousel-title">
        <h2>Lo que te ofrecemos</h2>
      </div>

      <Carousel
        arrows
        slidesPerPage={6}
        infinite
        animationSpeed={200}
        centered
        offset={50}
        itemWidth={400}
        slides={Slides}
        breakpoints={{
          960: {
            slidesPerPage: 1,
            arrows: true,
            itemWidth: 250,
          },
        }}
      />
    </div>
  );
};

export default Slider;
