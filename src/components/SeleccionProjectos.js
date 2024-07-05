import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SeleccionProjectos = () => {
  const navigate = useNavigate();
  const [projectos, setProjectos] = useState([]);
  const [projectoSeleccionado, setProjectoSeleccionado] = useState('');
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // URL de la API desplegada en Render
    const apiUrl = 'http://172.16.30.76:8080/api/v1/projects/project';

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // Agregar otras cabeceras si es necesario
          },
        });

        if (!response.ok) {
          throw new Error('Error al obtener los proyectos');
        }

        const data = await response.json();
        setProjectos(data);
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
              <td>{projecto.nombre}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={manejarSeleccion} disabled={!projectoSeleccionado}>Aceptar</button>
    </div>
  );
};

export default SeleccionProjectos;

