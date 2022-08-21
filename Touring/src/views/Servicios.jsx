import "../styles/App.css";
import Cover from "../components/cover/CoverS";
import Navba from "../components/navbar/Navba";
import Footer from "../components/footer/Footers";
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