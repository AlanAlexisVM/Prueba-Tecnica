import React from 'react'
import Info from '../info/Info';
import "../../styles/App.css";

const Tab = () => {
    return (
        //Componente que muestra la informacion de Tableau
        <>
        <Info title = "El análisis que los usuarios adoran usar" tex = "Es un software de analisis de datos con una excelente capa de visualización y presentación, considerado por muchos como uno de los mejores programas para la presentación visual de datos y con muy alta clasificación en la facilidad de uso . Especialmente utilizada para el Business Intelligence, simplifica los datos para presentarlos en un formato compresible e intuitivo." image = "https://www.turing-ia.com/assets/img/partnertab.png"/>
        <Info title = "Conectores de datos nativos de Tableau" tex = "Conéctese a todos sus datos, sin importar dónde estén ubicados. Tableau ofrece conectores nativos desarrollados y optimizados para numerosas bases de datos y archivos, desde hojas de cálculo y archivos PDF hasta big data, cubos y bases de datos relacionales, ya sea en las instalaciones físicas o en la nube. Estos también incluyen los datos de aplicaciones o en la web." image = "https://raw.githubusercontent.com/AlanAlexisVM/Prueba-Tecnica/main/Touring/src/media/Table.PNG"/>
        <Info title = "TABLEAU PREP" tex = "Cambia la forma en que se realiza la preparación de datos tradicional en una organización. Al proporcionar una forma visual y directa de combinar, dar forma y limpiar datos. Asimismo, automatiza los flujos de preparación de datos. Así podrá completar los análisis y obtener la información mucho más rápido." image = "https://www.turing-ia.com/assets/img/prep.png"/>
        <Info title = "TABLEAU DESKTOP" tex = "Deje atrás a los creadores de gráficos. Los análisis visuales en vivo impulsan la exploración de datos ilimitada." image = "https://www.turing-ia.com/assets/img/prep.png"/>
        <Info title = "TABLEAU CLOUD" tex = "Es su plataforma de análisis completamente alojada en la nube. Publique Dashboards y comparta sus descubrimientos con cualquier persona." image = "https://www.turing-ia.com/assets/img/tabon.png"/>
        <Info title = "TABLEAU SERVER" tex = "Difunde el valor de los datos en toda tu organización con Tableau Server. Otórgale poder a tu empresa dándole la libertad de explorar los datos en un entorno de confianza, sin limitarlos a preguntas predefinidas, asistentes o tipos de gráficos inflexibles." image = "https://www.turing-ia.com/assets/img/servert.png"/>
        <Info title = "TABLEAU DATA MANAGEMENT" tex = "Te ayuda a administrar mejor los datos dentro de tu entorno de análisis, asegurando que siempre se usen datos confiables y actualizados para tomar decisiones." image = "https://www.turing-ia.com/assets/img/dataman.jpg"/>
        <Info title = "TABLEAU SERVER MANAGEMENT" tex = "Tableau Server Management Add-on facilita la ejecución de implementaciones de Tableau Server grandes y de misión crítica." image = "https://www.turing-ia.com/assets/img/serverma.png"/>
        </>
    )
}

export default Tab;