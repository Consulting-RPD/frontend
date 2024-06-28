import React from 'react';

const FormularioNFPA13 = () => {
    const segundaTabla = (
    <table>
      <thead>
        <tr>
          <th>Localización del sistema</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>
            Nombre <br />
            <input type="text" name="nombre1" /> <br />
            <input type="text" name="nombre2" /> <br />
            <input type="text" name="nombre3" /> <br />
            <input type="text" name="nombre4" /> <br />
            <input type="text" name="nombre5" />
          </th>
          <th>
            Edificaciones que alimenta <br />
            <input type="text" name="nombreModelo1" /> <br />
            <input type="text" name="nombreModelo2" /> <br />
            <input type="text" name="nombreModelo3" /> <br />
            <input type="text" name="nombreModelo4" /> <br />
            <input type="text" name="nombreModelo5" />
          </th>
        </tr>
      </tbody>
    </table>
  );
    const terceraTabla = (
    <table>
        
      <thead>
      <tr>
          <th>Rociadores</th>
        </tr>        
        <tr>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Año de Fabricación</th>
          <th>Factor K</th>
          <th>Cantidad</th>
          <th>Temperatura de Respuesta</th>
        </tr>
      </thead>
      <tbody>
        {/* Create 5 rows with input fields */}
        {Array.from({ length: 5 }).map((_, index) => (
          <tr key={index}>
            <td>
              <input type="text" name={`marca${index + 1}`} />
            </td>
            <td>
              <input type="text" name={`modelo${index + 1}`} />
            </td>
            <td>
              <input type="text" name={`anioFabricacion${index + 1}`} />
            </td>
            <td>
              <input type="text" name={`factorK${index + 1}`} />
            </td>
            <td>
              <input type="text" name={`cantidad${index + 1}`} />
            </td>
            <td>
              <input type="text" name={`temperaturaRespuesta${index + 1}`} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const cuartaTabla = (
    <table>
      <thead>
        <tr>
          <th>Tipo de Tubería</th>
          <th>Tipo de Acoples</th>
          <th>Colgadores, soportes, acoples y juntas flexibles instalados correctamente.</th> 
          <th>Si no, explique</th>
        </tr>
      </thead>
      <tbody>
      <input type="text" name="tipoTuberia" />

          <td>
            <div className="checkbox-container">
              <input type="checkbox" name="roscados" id="roscados" />
              <label for="roscados">Roscados</label>
            </div>
            <div className="checkbox-container">
              <input type="checkbox" name="ranurados" id="ranurados" />
              <label for="ranurados">Ranurados</label>
            </div>
            <div className="checkbox-container">
              <input type="checkbox" name="soldados" id="soldados" />
              <label for="soldados">Soldados</label>
            </div>
            <div className="checkbox-container">
              <input type="checkbox" name="bridados" id="bridados" />
              <label for="bridados">Bridados</label>
            </div>
          </td>
          <td>
            <div className="radio-container">
              <input type="radio" name="verificacion" id="si" value="si" />
              <label for="si">Si</label>
            </div>
            <div className="radio-container">
              <input type="radio" name="verificacion" id="no" value="no" />
              <label for="no">No</label>
            </div>
            <div className="radio-container">
              <input type="radio" name="verificacion" id="na" value="na" />
              <label for="na">N/A</label>
            </div>
          </td>
          <td>
            <input type="text" name="explicacion" />
          </td>
        
      </tbody>
    </table>
  );

    


  return (
    <div>
      <h1>Formulario NFPA 13</h1>
      <form>
        <div>
          <label htmlFor="nombreAreaProtegida">Nombre del Área Protegida:</label>
          <input type="text" id="nombreAreaProtegida" name="nombreAreaProtegida" required />
        </div>
        <div>
          <label htmlFor="fecha">Fecha:</label>
          <input type="date" id="fecha" name="fecha" required />
        </div>
        <div>
          <label htmlFor="direccion">Dirección:</label>
          <input type="text" id="direccion" name="direccion" required />
        </div>
        <div>
          <label htmlFor="horaInicio">Hora de Inicio:</label>
          <input type="time" id="horaInicio" name="horaInicio" required />
        </div>
        <div>
          <label htmlFor="tipoPrueba">Tipo de Prueba:</label>
          <select id="tipoPrueba" name="tipoPrueba" required>
            <option value="recepcionSistema">Recepción del Sistema</option>
            <option value="pruebasPeriodicasAnuales">Pruebas Periódicas Anuales</option>
          </select>
        </div>
        <table>
          <thead>
            <tr>
              <th>INFORMACIÓN GENERAL</th>
              <th>Si</th>
              <th>No</th>
              <th>N/A</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>La instalación cumple con los planos aprobados</td>
              <td><input type="radio" name="instacionPlanos" value="si" /></td>
              <td><input type="radio" name="instacionPlanos" value="no" /></td>
              <td><input type="radio" name="instacionPlanos" value="na" /></td>
            </tr>
            <tr>
              <td>El equipamiento cumple con la especificación técnica</td>
              <td><input type="radio" name="equipamentoEspecificacion" value="si" /></td>
              <td><input type="radio" name="equipamentoEspecificacion" value="no" /></td>
              <td><input type="radio" name="equipamentoEspecificacion" value="na" /></td>
            </tr>
            <tr>
              <td>El personal encargado ha sido capacitado en el manejo u operación del sistema. ¿Se entregó un certificado?</td>
              <td><input type="radio" name="personalEncargado" value="si" /></td>
              <td><input type="radio" name="personalEncargado" value="no" /></td>
              <td><input type="radio" name="personalEncargado" value="na" /></td>
            </tr>
            <tr>
              <td>Se colocó en el expediente del proyecto lo siguiente:</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Planos as-built</td>
              <td><input type="radio" name="planosAsIS" value="si" /></td>
              <td><input type="radio" name="planosAsIS" value="no" /></td>
              <td><input type="radio" name="planosAsIS" value="na" /></td>
            </tr>
            <tr>
              <td>Especificaciones técnicas de los equipos instalados</td>
              <td><input type="radio" name="especificacionesTecnicas" value="si" /></td>
              <td><input type="radio" name="especificacionesTecnicas" value="no" /></td>
              <td><input type="radio" name="especificacionesTecnicas" value="na" /></td>
            </tr>
            <tr>
              <td>Acta de capacitación de uso del sistema al usuario final</td>
              <td><input type="radio" name="actaCapacitacion" value="si" /></td>
              <td><input type="radio" name="actaCapacitacion" value="no" /></td>
              <td><input type="radio" name="actaCapacitacion" value="na" /></td>
            </tr>
            <tr>
              <td>Manual de usuario y componentes del sistema</td>
              <td><input type="radio" name="manualUsuario" value="si" /></td>
              <td><input type="radio" name="manualUsuario" value="no" /></td>
              <td><input type="radio" name="manualUsuario" value="na" /></td>
            </tr>
            <tr>
              <td>Documentación</td>
              <td><input type="radio" name="documentacion" value="si" /></td>
              <td><input type="radio" name="documentacion" value="no" /></td>
              <td><input type="radio" name="documentacion" value="na" /></td>
            </tr>
            <tr>
              <td>Manual de mantenimiento del sistema</td>
              <td><input type="radio" name="manualMantenimiento" value="si" /></td>
              <td><input type="radio" name="manualMantenimiento" value="no" /></td>
              <td><input type="radio" name="manualMantenimiento" value="na" /></td>
            </tr>
            <tr>
              <td>Programa de inspecciones periódicas según NFPA 25</td>
              <td><input type="radio" name="programaInspecciones" value="si" /></td>
              <td><input type="radio" name="programaInspecciones" value="no" /></td>
              <td><input type="radio" name="programaInspecciones" value="na" /></td>
            </tr>
            <tr>
              <td>Certificado de prueba hidrostática</td>
              <td><input type="radio" name="certificadoHidrostatica" value="si" /></td>
              <td><input type="radio" name="certificadoHidrostatica" value="no" /></td>
              <td><input type="radio" name="certificadoHidrostatica" value="na" /></td>
            </tr>
            <tr>
              <td>Certificado de lavado de tuberías</td>
              <td><input type="radio" name="certificadoLavado" value="si" /></td>
              <td><input type="radio" name="certificadoLavado" value="no" /></td>
              <td><input type="radio" name="certificadoLavado" value="na" /></td>
            </tr>
            <tr>
              <td>En caso haya habido soldadura se colocó:</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Certificado de cumplimiento con los procedimientos según AWS B2.1</td>
              <td><input type="radio" name="certificadoCumplimiento" value="si" /></td>
              <td><input type="radio" name="certificadoCumplimiento" value="no" /></td>
              <td><input type="radio" name="certificadoCumplimiento" value="na" /></td>
            </tr>
            <tr>
              <td>Certificado de personal capacitado en procedimientos según AWS B2.1</td>
              <td><input type="radio" name="certificadoPersonal" value="si" /></td>
              <td><input type="radio" name="certificadoPersonal" value="no" /></td>
              <td><input type="radio" name="certificadoPersonal" value="na" /></td>
            </tr>
            <tr>
              <td>Observaciones:</td>
            </tr>
            <tr>
              <td><textarea name="observaciones"></textarea></td>
            </tr>
          </tbody>
        </table>
        </form>

      {segundaTabla}
      {terceraTabla}
      {cuartaTabla}
    </div>
  );
};

export default FormularioNFPA13;
