import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './views/App.jsx'
import { BrowserRouter,
  Route,
  Routes,
  } from "react-router-dom";
import Nosotros from "./views/Nosotros";  
import Contacto from "./views/Contacto";
import Blog from "./views/Blog";
import Servicios from "./views/Servicios";
import Tableau from "./views/Tableau";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/Nosotros" element={<Nosotros />}/>
      <Route path="/Servicios" element={<Servicios />}/>
      <Route path="/Tableau" element={<Tableau />}/>
      <Route path="/Blog" element={<Blog />}/>
      <Route path="/Contacto" element={<Contacto />}/>
    </Routes>
            
  </BrowserRouter>
)
