import "../styles/App.css";
import Cover from "../components/cover/CoverT";
import Navba from "../components/navbar/Navba";
import Footer from "../components/footer/Footers";
import Tab from "../components/tab/Tab";

function Tableau() {

  return (
    <div className="App">
      <Navba />
      <Cover />
      <Tab />
      <Footer />
    </div>
  );
}

export default Tableau;