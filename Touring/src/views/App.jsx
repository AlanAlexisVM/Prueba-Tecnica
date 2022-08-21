import "../styles/App.css";
import Cover from "../components/cover/Cover";
import Navba from "../components/navbar/Navba";
import About from "../components/about/About";
import Slider from "../components/slider/Slider";
import Footer from "../components/footer/Footers";
import Customers from "../components/customers/Customers";

function App() {

  return (
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
