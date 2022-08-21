import React from 'react'
import Info from '../info/Info';
import "../../styles/App.css";

const Service = () => {
    return (
        //Componente que muestra los servicios que ofrece la empresa utilizando el componente Info
        <>
            <Info title = "Servicios en Turing-IA" tex = "Proporcionamos a nuestros clientes una gama de productos y servicios relacionados con el analisis de datos, mediante el uso de tecnologias como Tableau, Salesforce, PMI, Scrum." image = "https://www.turing-ia.com/assets/img/servicios.jpg"/>
            <Info title = "Implementación de Proyectos (Business Analyst)" tex = "Nuestra metodología de servicios se encuentra orientada en los estándares del Project Management Institute (PMI) ® e International Project Management Association (IPMA). Esto nos permite contar con las competencias para coordinar equipos de trabajo en el inicio, planeación, construcción, monitoreo y control de las actividades y recursos involucrados en un proyecto a partir de los objetivos y requerimientos de nuestro cliente." image = "https://www.turing-ia.com/assets/img/code.jpg"/>
            <Info title = "Desarrollo de Aplicaciones" tex = "En un mundo moderno, con la cantidad de problemas y su complejidad cada vez es mayor, el desarrollo de aplicaciones, una herramienta para obtener soluciones precisas, dándole tareas repetitivas a la computadora y logrando así la automatización de procesos que todavía requieren la intervención de las personas en tareas repetitivas." image = "https://www.turing-ia.com/assets/img/vsoft.jpg"/>
            <Info title = "Workshop (Blue Print)" tex = "Su estrategia debe abarcar la gestión de personas, procesos y cambios, incluida la identificación de casos de uso comercial inmediatos, la definición de roles, responsabilidades, el establecimiento de medidas para evaluar el éxito y el impacto." image = "https://www.turing-ia.com/assets/img/venta%20personal.jpg"/>
            <Info title = "Capacitación" tex = "Nuestra gama de cursos de Tableau incluye:Tableau Prep Tableau, Desktop Visual Analytics, Tableau Server" image = "https://www.turing-ia.com/assets/img/balanced%20scorecard.webp"/>
            <Info title = "Venta de Software" tex = "Nos dedicamos a la venta de licencias de software, podemos recomendarle los sistemas que de acuerdo a sus necesidades son más adecuados." image = "https://www.turing-ia.com/assets/img/vsoft.jpg"/>
            <Info title = "Venta de hardware" tex = "Trabajamos con los mejores proveedores de México y tenemos la capacidad de cubrir cualquier necesidad que tenga de hardware. Redes, computadoras, impresoras y accesorios." image = "https://www.turing-ia.com/assets/img/venta%20personal.jpg"/>
            <Info title = "Balanced Scorecard" tex = "Somos especialistas en el balanced scorecard. Dejanos tener un cumplimiento sostenido de la Misión y Visión de tu empresa a través de la gestión de cuatro perspectivas." image = "https://www.turing-ia.com/assets/img/balanced%20scorecard.webp"/>
        </>
    )
}

export default Service;