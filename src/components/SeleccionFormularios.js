// src/components/SeleccionFormularios.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SeleccionFormularios = () => {
  const navigate = useNavigate();

  const manejarSeleccion = (formulario) => {
    navigate(`/formularios/${formulario}`);
  };

  return (
    <div>
      <h1>Selecciona un formulario</h1>
      <button onClick={() => manejarSeleccion('nfpa13')}>Formulario NFPA 13</button>
      {/* Puedes agregar más botones para otros formularios aquí */}
    </div>
  );
};

export default SeleccionFormularios;
