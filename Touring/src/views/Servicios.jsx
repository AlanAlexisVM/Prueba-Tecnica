import "../styles/App.css";
import Cover from "../components/cover/CoverS";
import Navba from "../components/navbar/Navba";
import Footer from "../components/footer/Footers";
import Service from "../components/services/Service";

function Servicios() {

  return (
    //Pagina de Servicios
    //Se utiliza el componente Service para mostrar los servicios de la empresa
    <div className="App">
      <Navba />
      <Cover />
      <Service />
      <Footer />
    </div>
  );
}

export default Servicios;