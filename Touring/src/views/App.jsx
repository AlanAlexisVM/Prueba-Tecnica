import "../styles/App.css";
import Cover from "../components/cover/Cover";
import Navba from "../components/navbar/Navba";
import About from "../components/about/About";
import Slider from "../components/slider/Slider";
import Footer from "../components/footer/Footers";
import Customers from "../components/customers/Customers";

function App() {

  return (
    //Es el la pagian principal de la aplicación
    //Se utiliza el componente Navba para que se muestre en todas las vistas
    //Se utiliza el componente Cover para que se muestre en todas las vistas
    //Se utiliza el componente Footer para que se muestre en todas las vistas
    <div className="App">
      <Navba />
      <Cover />
      <About />
      <Slider />
      <Customers />
      <Footer />
    </div>
  );
}

export default App;
