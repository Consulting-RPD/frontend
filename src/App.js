import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SeleccionProjectos from './components/SeleccionProjectos';
import SeleccionFormularios from './components/SeleccionFormularios';
import FormularioNFPA13 from './forms/FormularioNFPA13';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SeleccionProjectos />} />
        <Route path="/seleccion-formulario" element={<SeleccionFormularios />} />
        <Route path="/" element={<SeleccionFormularios />} />
        <Route path="/formularios/nfpa13" element={<FormularioNFPA13 />} />
        {/* Puedes agregar más rutas para otros formularios aquí */}
      </Routes>
    </Router>
  );
}

export default App;
