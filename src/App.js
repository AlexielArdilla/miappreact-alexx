import './App.css';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Registro from './paginas/Registro';
import Home from './paginas/Home';
import Loguearse from './paginas/Loguearse';
import meli from './img/mercadolibre.jpg';
import Rutas from './componentes/Rutas';
import Footer from './componentes/Footer';

function App() {

  return (
    <Router>
      <h1>Mercadito Libre</h1>
      <div className="App">
        <nav>
          <ul>
            <li>
            <Link to="/" element={<Home />}className='list'>
              Home
            </Link></li>
            <li>
            <Link to="/registro" element={<Registro />} className='list'>
              Registro
            </Link></li>
            <li>
            <Link to="/loguearse" element={<Loguearse />} className='list'>
              Loguearse
            </Link></li>
          </ul>
        </nav>
        <img src={meli} className="AppLogo" alt="Cartel de mercadolibre"/> 
      </div>
      <Rutas/>
      <Footer/>
    </Router>
  );
}

export default App;
