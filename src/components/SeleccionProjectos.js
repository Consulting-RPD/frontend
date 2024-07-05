import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SeleccionProjectos = () => {
  const navigate = useNavigate();
  const [projectos, setProjectos] = useState([]);
  const [projectoSeleccionado, setProjectoSeleccionado] = useState('');
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = 'https://rpd-dev.onrender.com/api/v1/projects/project';

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // No incluir 'Access-Control-Allow-Origin' aquí
          },
        });

        if (!response.ok) {
          throw new Error('Error al obtener los proyectos');
        }

        const data = await response.json();
        setProjectos(data.content); // Aquí accedemos a data.content que contiene los proyectos
      } catch (error) {
        setError(error.message);
      } finally {
        setCargando(false);
      }
    };

    fetchData();
  }, []);

  const manejarSeleccion = () => {
    if (projectoSeleccionado) {
      navigate('/seleccion-formulario');
    }
  };

  if (cargando) {
    return <div>Cargando proyectos...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Seleccione su proyecto</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre del Proyecto</th>
          </tr>
        </thead>
        <tbody>
          {projectos.map(projecto => (
            <tr key={projecto.id} onClick={() => setProjectoSeleccionado(projecto.id)}>
              <td>{projecto.projectName}</td> {/* Usamos projectName en lugar de nombre */}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={manejarSeleccion} disabled={!projectoSeleccionado}>Aceptar</button>
    </div>
  );
};

export default SeleccionProjectos;