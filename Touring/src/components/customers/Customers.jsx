import React from "react";
import "@brainhubeu/react-carousel/lib/style.css";
import "../../styles/Slider.css";
import Car from "./Car"; 

const Customers = () => {
  //Se utiliza el componente Car para mostrar los clientes
  return (
    <>
        <h1>Historia de Clientes</h1>
        <Car />
    </>
    
  )
}

export default Customers;