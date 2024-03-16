import './App.css'
import Calendario from './calendario/Calendario';
import Contacto from './contacto/Contacto';
import Equipos from './equipos/Equipos';
import Estadisticas from './estadisticas/Estadisticas';
import Encabezado from './header/Headerr'
import Multimedia from './multimedia/Multimedia';
import Nav from './nav/Nav'
import Posiciones from './posiciones/Posiciones';
import Resultados from './resultados/Resultados';
import { Routes, Route, Navigate } from "react-router-dom";
function App() {


  return (
      <div>
        <Encabezado/>
        <Nav/>
        <Routes>
        <Route path="/resultados" element={<Resultados />} />
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/posiciones" element={<Posiciones />} />
        <Route path="/estadisticas" element={<Estadisticas />} />
        <Route path="/equipos" element={<Equipos />} />
        <Route path="/videos" element={<Multimedia />} />
        <Route path="/comunidad" element={<Resultados />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/historia" element={<Resultados />} />
        <Route path="/tienda" element={<Resultados />} />
        <Route path="/aprende" element={<Resultados />} />
        
        <Route path="*" element={<Navigate to="/inicio" />} />
      </Routes>
      </div>

  )
}

export default App
