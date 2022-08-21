import "../styles/App.css";
import Cover from "../components/cover/CoverB";
import Navba from "../components/navbar/Navba";
import Footer from "../components/footer/Footers";

function Blog() {

  return (
    //Pagina de Blog
    <div className="App">
      <Navba/>
      <Cover />
      <Footer />
    </div>
  );
}

export default Blog;