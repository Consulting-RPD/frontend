import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SeleccionFormularios = () => {
  const navigate = useNavigate();
  const [formularioSeleccionado, setFormularioSeleccionado] = useState('');

  const manejarSeleccion = () => {
    if (formularioSeleccionado) {
      navigate(`/formularios/${formularioSeleccionado}`);
    }
  };

  return (
    <div>
      <h1>Selecciona un formulario</h1>
      <select onChange={(e) => setFormularioSeleccionado(e.target.value)} value={formularioSeleccionado}>
        <option value="">Seleccionar...</option>
        <option value="nfpa13">Formulario NFPA 13</option>
        {/* Agrega más opciones aquí para otros formularios */}
      </select>
      <button onClick={manejarSeleccion} disabled={!formularioSeleccionado}>Aceptar</button>
    </div>
  );
};

export default SeleccionFormularios;
