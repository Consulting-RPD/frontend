import React, { useState, useEffect } from 'react';
import {useLocation } from 'react-router-dom';
import '../styles/EstiloFormularioNFPA13.css';

const FormularioNFPA13 = () => {
  const location = useLocation();
  const [tipoPrueba, setTipoPrueba] = useState('');
  const [mostrarInformacionGeneral, setMostrarInformacionGeneral] = useState(true);
  const [fechaHora, setFechaHora] = useState('');

  useEffect(() => {
    const now = new Date();
    const formattedDateTime = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}T${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    setFechaHora(formattedDateTime);
  }, []);

  const handleTipoPruebaChange = (e) => {
    const seleccion = e.target.value;
    setTipoPrueba(seleccion);

    if (seleccion === 'Pruebas periódicas anuales') {
      setMostrarInformacionGeneral(false);
    } else {
      setMostrarInformacionGeneral(true);
    }
  };

  const handleGuardar = async () => {
    const { protocolId, protocolNumber } = location.state; //protocolId de la DB
    const protectedArea = document.getElementById('nombreAreaProtegida')?.value || '';  
    const date = fechaHora;
    const address = document.getElementById('direccion')?.value || '';
    const type = tipoPrueba === 'Recepción del sistema' ? 0 : 1;

    const data = {
      protocolNumber,
      protectedArea,
      date,
      address,
      type,
    };
    console.log('Datos a enviar:', data);

    try {
      const response = await fetch(`https://rpd-dev.onrender.com/api/v1/protocols/protocolHeader/${protocolId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Datos guardados:', result);
        // Aquí puedes manejar la respuesta del servidor, como mostrar un mensaje de éxito.
      } else {
        console.error('Error al guardar los datos');
        // Aquí puedes manejar el error, como mostrar un mensaje de error.
      }
    } catch (error) {
      console.error('Error en la petición:', error);
    }
  };

  const localizacionSistemaTabla = (
    <table>
      <thead>
        <tr>
          <th>Localización del sistema</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            Nombre <br />
            <input type="text" name="nombre1" /> <br />
            <input type="text" name="nombre2" /> <br />
            <input type="text" name="nombre3" /> <br />
            <input type="text" name="nombre4" /> <br />
            <input type="text" name="nombre5" />
          </td>
          <td>
            Edificaciones que alimenta <br />
            <input type="text" name="nombreModelo1" /> <br />
            <input type="text" name="nombreModelo2" /> <br />
            <input type="text" name="nombreModelo3" /> <br />
            <input type="text" name="nombreModelo4" /> <br />
            <input type="text" name="nombreModelo5" />
          </td>
        </tr>
      </tbody>
    </table>
  );


    const rociadoresTabla = (
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

  const tuberiaAccesoriosTabla = (
    <table>     
      <tbody>
      <th>Tipo de Tubería: <input type="text" name="tipoTuberia" /></th>

          <td>
            <th>Tipo de Acoples</th>
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
                    
          <tr>
            <td>Colgadores, soportes, acoples y juntas flexibles instalados correctamente.</td> 
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
          </tr>

          <tr>
              <th>Sí no, explique:</th>
            </tr>
            <tr>
              <td><textarea name="observaciones"></textarea></td>
            </tr>
        
      </tbody>
    </table>
  );

  const valvulaAlarmaIndicadoresFlujoTabla = (
    <form>
      <table>
        <thead>
          <tr>
            <th colSpan="4">Válvulas de alarma o indicadores de flujo</th>
          </tr>
          <tr>
            <th> </th>
            <th>Si</th>
            <th>No</th>
            <th>N/A</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Existe válvulas de alarma o indicadores de flujo</td>
            <td><input type="radio" name="existeValvulas" value="si" /></td>
            <td><input type="radio" name="existeValvulas" value="no" /></td>
            <td><input type="radio" name="existeValvulas" value="na" /></td>
          </tr>
          <tr>
            <td>Encendió la bomba contra incendio al presentarse un cambio de flujo y una baja de presión</td>
            <td><input type="radio" name="encendioBomba" value="si" /></td>
            <td><input type="radio" name="encendioBomba" value="no" /></td>
            <td><input type="radio" name="encendioBomba" value="na" /></td>
          </tr>
        </tbody>
      </table>
    </form>
  );
  
  const datoDispositivosAlarmaTabla = (
    <table>
      <thead>
        <tr>
          <th colSpan="4">DATOS DE DISPOSITIVOS DE ALARMA</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            Tipo <br />
            <input type="text" name="tipoDispositivoAlarma1" />
            <br />
            <input type="text" name="tipoDispositivoAlarma2" />
            <br />
            <input type="text" name="tipoDispositivoAlarma3" />
          </td>
          <td>
            Marca <br />
            <input type="text" name="marcaDispositivoAlarma1" />
            <br />
            <input type="text" name="marcaDispositivoAlarma2" />
            <br />
            <input type="text" name="marcaDispositivoAlarma3" />
          </td>
          <td>
            Modelo <br />
            <input type="text" name="modeloDispositivoAlarma1" />
            <br />
            <input type="text" name="modeloDispositivoAlarma2" />
            <br />
            <input type="text" name="modeloDispositivoAlarma3" />
          </td>
          <td>
            Ubicaciones <br />
            <input type="text" name="ubicacionDispositivoAlarma1" />
            <br />
            <input type="text" name="ubicacionDispositivoAlarma2" />
            <br />
            <input type="text" name="ubicacionDispositivoAlarma3" />
          </td>
        </tr>
      </tbody>
    </table>
  );
  
  const pruebasDispositivosAlarmaTabla =  (
    <table>
      <thead>
        <tr>
          <th colSpan="6">PRUEBAS A DISPOSITIVOS DE ALARMA</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            Ubicación <br /><br /><br />
            <input type="text" name="ubicacionPruebasDispositivo1" />
            <br />
            <input type="text" name="ubicacionPruebasDispositivo2" />
            <br />
            <input type="text" name="ubicacionPruebasDispositivo3" />
            <br />
            <input type="text" name="ubicacionPruebasDispositivo4" />
            <br />
            <input type="text" name="ubicacionPruebasDispositivo5" />
          </td>
          <td>
            La válvula de sectorización <br />
            supervisada mandó señal al <br />
            panel? <br />
            <input type="text" name="valvulaSectorizacionPruebasDispositivo1" />
            <br />
            <input type="text" name="valvulaSectorizacionPruebasDispositivo2" />
            <br />
            <input type="text" name="valvulaSectorizacionPruebasDispositivo3" />
            <br />
            <input type="text" name="valvulaSectorizacionPruebasDispositivo4" />
            <br />
            <input type="text" name="valvulaSectorizacionPruebasDispositivo5" />
          </td>
          <td>
            El dispositivo de alarma <br />
            mandó señal al panel? <br /><br />
            <input type="text" name="dispositivoAlarmaPruebasDispositivo1" />
            <br />
            <input type="text" name="dispositivoAlarmaPruebasDispositivo2" />
            <br />
            <input type="text" name="dispositivoAlarmaPruebasDispositivo3" />
            <br />
            <input type="text" name="dispositivoAlarmaPruebasDispositivo4" />
            <br />
            <input type="text" name="dispositivoAlarmaPruebasDispositivo5" />
          </td>
          <td>
            Tipo de dispositivo de<br />
            alarma <br /><br />
            <input type="text" name="tipoDispositivoPruebasDispositivo1" />
            <br />
            <input type="text" name="tipoDispositivoPruebasDispositivo2" />
            <br />
            <input type="text" name="tipoDispositivoPruebasDispositivo3" />
            <br />
            <input type="text" name="tipoDispositivoPruebasDispositivo4" />
            <br />
            <input type="text" name="tipoDispositivoPruebasDispositivo5" />
          </td>
          <td>
            Tiempo de operación desde <br />
            que se abre la válvula<br />
            de prueba en minutos<br />
            <input type="text" name="tiempoMinutosOperacionPruebasDispositivo1" />
            <br />
            <input type="text" name="tiempoMinutosOperacionPruebasDispositivo2" />
            <br />
            <input type="text" name="tiempoMinutosOperacionPruebasDispositivo3" />
            <br />
            <input type="text" name="tiempoMinutosOperacionPruebasDispositivo4" />
            <br />
            <input type="text" name="tiempoMinutosOperacionPruebasDispositivo5" />
          </td>
          <td>
            Tiempo de operación desde <br />
            que se abre la válvula<br />
            de prueba en segundos<br />
            <input type="text" name="tiempoSegundosOperacionPruebasDispositivo1" />
            <br />
            <input type="text" name="tiempoSegundosOperacionPruebasDispositivo2" />
            <br />
            <input type="text" name="tiempoSegundosOperacionPruebasDispositivo3" />
            <br />
            <input type="text" name="tiempoSegundosOperacionPruebasDispositivo4" />
            <br />
            <input type="text" name="tiempoSegundosOperacionPruebasDispositivo5" />
          </td>
        </tr>
      </tbody>
    </table>
  );
  
  const pruebaFuncionamientoSistemasSecosTabla =  (
    <table>
      <thead>
        <tr>
          <th colSpan="2">PRUEBA DE FUNCIONAMIENTO DE SISTEMAS SECOS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Dispositivo de Apertura (Q.O.D)</td>
        </tr>
        <tr>
          <td>Marca: <input type="text" name="marcaDispositivo" /></td>
        </tr>
        <tr>
          <td>Modelo: <input type="text" name="modeloDispositivo" /></td>
        </tr>
        <tr>
          <td>Número de Serie: <input type="text" name="numeroSerieDispositivo" /></td>
        </tr>

        <tr>
          <td>
             <br /><br /><br />
            <input type="text" name="enBlanco1" value=" "/>
            <br />
            <input type="text" name="enBlanco2" value="Sin Q.O.D"/>
            <br />
            <input type="text" name="enBlanco3" value="Con Q.O.D" />
          </td>
          <td>
            Tiempo en llegar a la <br />
            línea de pruebas<br /><br />
            <input type="text" name="tiempoLineaPrueba1" value="Segundos" />
            <br />
            <input type="text" name="tiempoLineaPrueba2" />
            <br />
            <input type="text" name="tiempoLineaPrueba3" />
          </td>
          <td>
            Presión del agua <br /><br /><br />
            <input type="text" name="presionAgua1" value="PSI" />
            <br />
            <input type="text" name="presionAgua2" />
            <br />
            <input type="text" name="presionAgua3" />
          </td>
          <td>
            Presión del aire<br /><br /><br />
            <input type="text" name="presionAire1" value="PSI" />
            <br />
            <input type="text" name="presionAire2" />
            <br />
            <input type="text" name="presionAire3" />
          </td>
          <td>
            Presión de aire en un<br />
            punto del transcurso <br /><br />
            <input type="text" name="presionAirePunto1" value="PSI" />
            <br />
            <input type="text" name="presionAirePunto2" />
            <br />
            <input type="text" name="presionAirePunto3" />
          </td>
          <td>
            Tiempo a la descarga<br />
            de pruebas<br /><br />
            <input type="text" name="tiempoDescarga1" value="Segundos" />
            <br />
            <input type="text" name="tiempoDescarga2" />
            <br />
            <input type="text" name="tiempoDescarga3" />
          </td>          
        </tr>
        <tr>
          <th> </th>
            <th>Si</th>
            <th>No</th>
        </tr>   

        <tr>
        <td>Encendió la bomba contra incendio <br />
            al presentarse un cambio de flujo y <br />
            una baja de presión <br />
        </td>
          <td><input type="radio" name="encendioBombaContraIncendio" value="si" /></td>
          <td><input type="radio" name="encendioBombaContraIncendio" value="no" /></td>
        </tr>
      </tbody>
    </table>
  );

  const valvulaDiluvioPreaccionTabla = (
    <table>
      <thead>
        <tr>
          <th colSpan="5">VÁLVULA DE DILUVIO Y PREACCIÓN</th>
        </tr>
        <tr>
          <th></th>
          <th>Neumático</th>
          <th>Eléctrico</th>
          <th>Hidráulico</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Operación</td>
          <td><input type="radio" name="operacionValvulaDiluvio" value="Neumático" /></td>
          <td><input type="radio" name="operacionValvulaDiluvio" value="Eléctrico" /></td>
          <td><input type="radio" name="operacionValvulaDiluvio" value="Hidráulico" /></td>
        </tr>
        <tr>
          <th></th>
          <th>No Diluvio</th>
          <th>Simple</th>
          <th>Doble</th>
        </tr>
        <tr>
          <td>Interbloqueo</td>
          <td><input type="radio" name="interbloqueoValvulaDiluvio" value="No Diluvio" /></td>
          <td><input type="radio" name="interbloqueoValvulaDiluvio" value="Simple" /></td>
          <td><input type="radio" name="interbloqueoValvulaDiluvio" value="Doble" /></td>
        </tr>
        <tr>
          <th></th>
          <th>Si</th>
          <th>No</th>
        </tr>
        <tr>
          <td>Tubería supervisada</td>
          <td><input type="radio" name="tuberiaSupervisadaValvulaDiluvio" value="si" /></td>
          <td><input type="radio" name="tuberiaSupervisadaValvulaDiluvio" value="no" /></td>
        </tr>
        <tr>
          <th></th>
          <th>Si</th>
          <th>No</th>
          <th>N/A</th>
        </tr>
        <tr>
          <td>Detección supervisada</td>
          <td><input type="radio" name="deteccionSupervisadaValvulaDiluvio" value="si" /></td>
          <td><input type="radio" name="deteccionSupervisadaValvulaDiluvio" value="no" /></td>
          <td><input type="radio" name="deteccionSupervisadaValvulaDiluvio" value="na" /></td>
        </tr>
        <tr>
          <th></th>
          <th>Máxima</th>
          <th>Mínima</th>
          <th>Baja Presión</th>
          <th>Alivio</th>
        </tr>
        <tr>
          <td>Presiones del aire (psi)</td>
          <td><input type="text" name="presionAireValvulaDiluvio1" /></td>
          <td><input type="text" name="presionAireValvulaDiluvio2" /></td>
          <td><input type="text" name="presionAireValvulaDiluvio3" /></td>
          <td><input type="text" name="presionAireValvulaDiluvio4" /></td>
        </tr>
        <tr>
          <td>Justifique:</td>
        </tr>
        <tr>
          <td colSpan="5"><textarea name="justificacion" /></td>
        </tr>

        <tr>
                <th> </th>
                <th>Si</th>
                <th>No</th> <br />
            </tr>   
            
            <td>Todos los accionamientos manuales funcionan correctamente</td>
            <td><input type="radio" name="accionamientosManualesValvulaDiluvio" value="si" /></td>
            <td><input type="radio" name="accionamientosManualesValvulaDiluvio" value="no" /></td>

            <tr>
                <td>Los circuitos y dispositivos de detección están accesibles</td>
                <td><input type="radio" name="circuitosDeteccionValvulaDiluvio" value="si" /></td>
                <td><input type="radio" name="circuitosDeteccionValvulaDiluvio" value="no" /></td>
            </tr>

            <tr>
                <td>Sí no, explique:</td>
            </tr>
            <tr>
                <td><textarea name="explicacionCircuitos" value=""></textarea> </td>
            </tr>

            <tr><td>Marca: <input type="text" /></td></tr>
            <tr><td>Modelo: <input type="text" /></td></tr>
            <tr>
                <th> </th>
                <th>Si</th>
                <th>No</th> <br />
            </tr>   
            
            <td>Presión del aire supervisada</td>
            <td><input type="radio" name="presionAireValvulaDiluvio" value="si" /></td>
            <td><input type="radio" name="presionAireValvulaDiluvio" value="no" /></td>
            
            <tr>
                <td>Señales que operan la válvula</td>
            <td><input type="radio" name="señalesOperanValvulaDiluvio" value="si" /></td>
            <td><input type="radio" name="señalesOperanValvulaDiluvio" value="no" /></td>
            </tr>
            <tr><td>Tiempo máximo de activación: <input type="text" /></td></tr>
      </tbody>
    </table>
  );

  const descripcionPruebasTabla = (
    <table>
      <tbody>
      <tr><th>Descripción de pruebas</th> </tr>
            <tr>
                <td>Hidrostática: Debe realizarse a una presión no menor que 200 psi (13.6 bar) 
                    por 2 horas o 50 psi (3.4 bar) sobre la presión estática si esta es mayor que 
                    150 psi (10.2 bar) por 2 horas. Las lengüetas de las válvulas check deben mantenerse
                     abiertas para evitar daños.</td>
            </tr>
            <tr>
                <td>Neumática: Establecer una presión de aire de 40 psi (2.7 bar) y medir la diferencia de presión, 
                    la cual no debe exceder de 1.5 psi (0.1 bar) en un periodo de 24 horas. Probar los tanques 
                    de presión al nivel de agua normal y medir la caída de presión, que no debe exceder en 1.5 psi
                     (0.1 bar) en 24 horas.</td>
            </tr>    
      </tbody>
    </table>
  );  

  const pruebasTabla = (
    <table>
      <tbody>
      <th>PRUEBAS</th>
            <tr>
                <th> </th>
                <th>Si</th>
                <th>No</th>
                <th>N/A</th>
            </tr>   
            
                <td>Todas las tuberías probadas hidrostáticamente</td>
                <td><input type="radio" name="pruebasTuberiasHidrostatica" value="si" /></td>
                <td><input type="radio" name="pruebasTuberiasHidrostatica" value="no" /></td>
                <td><input type="radio" name="pruebasTuberiasHidrostatica" value="na" /></td>
            <tr>
                <td>Tubería seca probada neumáticamente</td>
                <td><input type="radio" name="pruebasTuberiaSeca" value="si" /></td>
                <td><input type="radio" name="pruebasTuberiaSeca" value="no" /></td>
                <td><input type="radio" name="pruebasTuberiaSeca" value="na" /></td>
            </tr>
            <tr><td>Presión de prueba: <input type="text" /></td></tr>
            <tr><td>Tiempo de prueba: <input type="text" /></td></tr>
            <tr>
                <td>Equipos operan correctamente</td>
                <td><input type="radio" name="pruebasEquiposOperanCorrect" value="si" /></td>
                <td><input type="radio" name="pruebasEquiposOperanCorrect" value="no" /></td>
                <td><input type="radio" name="pruebasEquiposOperanCorrect" value="na" /></td>
            </tr>
            <tr>
                <td>Sí no, explique:</td>
            </tr>
            
            <td><textarea name="explicacionEquiposOperanCorrect" value=""></textarea> </td>
      </tbody>
    </table>

  );

  const pruebasEnunciadosTabla = (
    <table>
      <tbody>
      <tr>
                <th> </th>
                <th>Si</th>
                <th>No</th>
                <th>N/A</th>
            </tr>
            <td>Como contratista instalador, ¿certifica que no ha usado aditivos ni químicos
                corrosivos (silicato de sodio o derivados de silicato de sodio, salmuera u 
                otros químicos corrosivos) para las pruebas o para detener fugas?</td>
           <td><input type="radio" name="pruebasTuberiasHidrostatica" value="si" /></td>
           <td><input type="radio" name="pruebasTuberiasHidrostatica" value="no" /></td>
           <td><input type="radio" name="pruebasTuberiasHidrostatica" value="na" /></td>
           <tr>
                <td>El sistema de rociadores cuenta con múltiple de válvulas?</td>
                <td><input type="radio" name="pruebasTuberiasHidrostatica" value="si" /></td>
                <td><input type="radio" name="pruebasTuberiasHidrostatica" value="no" /></td>
                <td><input type="radio" name="pruebasTuberiasHidrostatica" value="na" /></td>
           </tr>
      </tbody>
    </table>

  );

  const presionesMultipleValvulaTabla = (
    <table>
      <tbody>
        <tr><th>Presiones en el múltiple de válvulas</th></tr>
        <tr>
                <td>Sistema <br/><br/><br/>
                    <input type="text" name="sistemaPresionMultipleValvula1" />
                    <br/>
                    <input type="text" name="sistemaPresionMultipleValvula2" />
                    <br/>
                    <input type="text" name="sistemaPresionMultipleValvula3" /> 
                    <br/>
                    <input type="text" name="sistemaPresionMultipleValvula4" />
                    <br/>
                    <input type="text" name="sistemaPresionMultipleValvula5" />            
                </td>
                <td >Presión estática (psi)<br/> Entrada<br/><br/>
                    <input type="text" name="presionEstaticaEntradaPresionMultipleValvula1" />
                    <br/>
                    <input type="text" name="presionEstaticaEntradaPresionMultipleValvula2" />
                    <br/>
                    <input type="text" name="presionEstaticaEntradaPresionMultipleValvula3" /> 
                    <br/>
                    <input type="text" name="presionEstaticaEntradaPresionMultipleValvula4" />
                    <br/>
                    <input type="text" name="presionEstaticaEntradaPresionMultipleValvula5" value="164" />             
                </td>
                <td >Presión estática (psi)<br/> Salida<br/><br/>
                    <input type="text" name="presionEstaticaSalidaPresionMultipleValvula1" />
                    <br/>
                    <input type="text" name="presionEstaticaSalidaPresionMultipleValvula2" />
                    <br/>
                    <input type="text" name="presionEstaticaSalidaPresionMultipleValvula3" />  
                    <br/>
                    <input type="text" name="presionEstaticaSalidaPresionMultipleValvula4" />
                    <br/>
                    <input type="text" name="presionEstaticaSalidaPresionMultipleValvula5" value="165" />             
                </td>
                <td >Presión residual (psi)<br/> Entrada<br/><br/>
                    <input type="text" name="presionResidualEntradaPresionMultipleValvula1" />
                    <br/>
                    <input type="text" name="presionResidualEntradaPresionMultipleValvula2" />
                    <br/>
                    <input type="text" name="presionResidualEntradaPresionMultipleValvula3" />  
                    <br/>
                    <input type="text" name="presionResidualEntradaPresionMultipleValvula4" />
                    <br/>
                    <input type="text" name="presionResidualEntradaPresionMultipleValvula5" value="162" />             
                </td>
                <td>Presión residual (psi)<br/> Salida<br/><br/>
                    <input type="text" name="presionResidualSalidaPresionMultipleValvula1" />
                    <br/>
                    <input type="text" name="presionResidualSalidaPresionMultipleValvula2" />
                    <br/>
                    <input type="text" name="presionResidualSalidaPresionMultipleValvula3" />  
                    <br/>
                    <input type="text" name="presionResidualSalidaPresionMultipleValvula4" />
                    <br/>
                    <input type="text" name="presionResidualSalidaPresionMultipleValvula5" value="160" />              
                </td>
                <td>Tiempo* <br/><br/><br/>
                    <input type="text" name="tiempoPresionMultipleValvula1" />
                    <br/>
                    <input type="text" name="tiempoPresionMultipleValvula2" />
                    <br/>
                    <input type="text" name="tiempoPresionMultipleValvula3" />  
                    <br/>
                    <input type="text" name="tiempoPresionMultipleValvula4" />
                    <br/>
                    <input type="text" name="tiempoPresionMultipleValvula5" />  
                </td>
            </tr> 
      </tbody>
    </table>

  );

  const tiempoRetornarPresionEstaticaTabla = (
    <table>
      <tbody>
        <tr><td>*Tiempo que tarda en retornar la presión estática a la presión original</td></tr>
        <tr>
                <th> </th>
                <th>Si</th>
                <th>No</th>
                <th>N/A</th>
            </tr>
            <td>¿Funciona correctamente la campana hidráulica del sistema y se encuentra rotulada?</td>
            <td><input type="radio" name="campanaHidraulicaFuncionaCorrect" value="si" /></td>
            <td><input type="radio" name="campanaHidraulicaFuncionaCorrect" value="no" /></td>
            <td><input type="radio" name="campanaHidraulicaFuncionaCorrect" value="na" /></td>

            <tr>
                <td>¿Las válvulas de sectorización se encuentran aseguradas o supervisadas?</td>
                <td><input type="radio" name="valvulasSectorizacionAseguradas" value="si" /></td>
                <td><input type="radio" name="valvulasSectorizacionAseguradas" value="no" /></td>
                <td><input type="radio" name="valvulasSectorizacionAseguradas" value="na" /></td>
            </tr>

            <tr>
                <td>¿El trim de alarma se encuentra correctamente instalado?</td>
                <td><input type="radio" name="trimAlarmCorrectInstall" value="si" /></td>
                <td><input type="radio" name="trimAlarmCorrectInstall" value="no" /></td>
                <td><input type="radio" name="trimAlarmCorrectInstall" value="na" /></td>
            </tr>

            <tr>
                <td>Sí no, explique:</td>
            </tr>            
            <td><textarea name="explicacionTrimAlarmaCorrectInstall" value=""></textarea> </td>

            <tr>
                <th> </th>
                <th>Si</th>
                <th>No</th>
                <th>N/A</th>
            </tr>
            <td>Se han instalado válvulas reguladoras de presión en los sistemas</td>
            <td><input type="radio" name="campanaHidraulicaFuncionaCorrect" value="si" /></td>
            <td><input type="radio" name="campanaHidraulicaFuncionaCorrect" value="no" /></td>
            <td><input type="radio" name="campanaHidraulicaFuncionaCorrect" value="na" /></td>

            <tr>
                <td>Si es afirmativo, indicar las ubicaciones:</td>
            </tr>            
            <td><textarea name="afirmativoIndicarUbi" value=""></textarea></td>
      </tbody>
    </table>
  );

  const valvulaReguladoraPresionTabla = (
    <table>
      <tbody>
        <th>Válvula reguladora de presión</th>
            <tr><td>Marca: <input type="text"/></td></tr>
            <tr><td>Modelo: <input type="text"/></td></tr>
            <tr><td>Presión de seteo:<input type="text"/></td></tr>
      </tbody>
    </table>
  );

  const presionEnSistemaTabla = (
    <table>
      <tbody>
        <th>Presiones en los sistemas</th>
            <tr>
                <td>Ubicación <br/> <br/> <br/>
                    <input type="text" name="ubicacionPresionesSistema1"/>
                    <br/>
                    <input type="text" name="ubicacionPresionesSistema2"/>
                    <br/>
                    <input type="text" name="ubicacionPresionesSistema3"/> 
                    <br/>
                    <input type="text" name="ubicacionPresionesSistema4"/>
                    <br/>
                    <input type="text" name="ubicacionPresionesSistema5"/>             
                </td>
                <td>Presión estática (psi) <br/> <br/> <br/>
                    <input type="text" name="presionPresionesSistema1"/> 
                    <br/>
                    <input type="text" name="presionPresionesSistema2"/> 
                    <br/>
                    <input type="text" name="presionPresionesSistema3"/>   
                    <br/>
                    <input type="text" name="presionPresionesSistema4"/> 
                    <br/>
                    <input type="text" name="presionPresionesSistema5"/>               
                </td>
                <td>Presión residual al ingreso <br/>
                    del sistema (psi) antes <br/> <br/>
                    <input type="text" name="presionResidulAntesPresionesSistema1"/> 
                    <br/> 
                    <input type="text" name="presionResidulAntesPresionesSistema2"/> 
                    <br/> 
                    <input type="text" name="presionResidulAntesPresionesSistema3"/>  
                    <br/> 
                    <input type="text" name="presionResidulAntesPresionesSistema4"/> 
                    <br/> 
                    <input type="text" name="presionResidulAntesPresionesSistema5"/>              
                </td>
                <td >Presión residual al ingreso <br/> 
                    del sistema (psi) despues <br/>  <br/> 
                    <input type="text" name="presionResidulDespuesPresionesSistema1"/> 
                    <br/> 
                    <input type="text" name="presionResidulDespuesPresionesSistema2"/> 
                    <br/> 
                    <input type="text" name="presionResidulDespuesPresionesSistema3"/> 
                    <br/> 
                    <input type="text" name="presionResidulDespuesPresionesSistema4"/> 
                    <br/> 
                    <input type="text" name="presionResidulDespuesPresionesSistema5"/>              
                </td>
                <td>Presión residual en el punto <br/> 
                     más desfavorable (psi)<br/> <br/>                   
                    
                    <input type="text" name="presionResidualDesfavorablePresionesSistema1"/> 
                    <br/> 
                    <input type="text" name="presionResidualDesfavorablePresionesSistema2"/> 
                    <br/> 
                    <input type="text" name="presionResidualDesfavorablePresionesSistema3"/> 
                    <br/> 
                    <input type="text" name="presionResidualDesfavorablePresionesSistema4"/> 
                    <br/> 
                    <input type="text" name="presionResidualDesfavorablePresionesSistema5"/>              
                </td>
            </tr>
      </tbody>
    </table>

  );

  const preguntasPruebasTabla = (
    <table>
      <tbody>
      <tr>
                <th> </th>
                <th>Si</th>
                <th>No</th>
                <th>N/A</th>
            </tr>
            <td>La válvula de prueba tiene el orificio diseñado con el diámetro del rociador más pequeño instalado</td>
            <td><input type="radio" name="campanaHidraulicaFuncionaCorrect" value="si" /></td>
            <td><input type="radio" name="campanaHidraulicaFuncionaCorrect" value="no" /></td>
            <td><input type="radio" name="campanaHidraulicaFuncionaCorrect" value="na" /></td>

            <tr>
                <td>Tuberías principales enterradas y alimentaciones a montantes lavadas antes de conectarlas al sistema</td>
                <td><input type="radio" name="campanaHidraulicaFuncionaCorrect" value="si" /></td>
                <td><input type="radio" name="campanaHidraulicaFuncionaCorrect" value="no" /></td>
                <td><input type="radio" name="campanaHidraulicaFuncionaCorrect" value="na" /></td>
            </tr>

            <tr>
                <td>Otros, detallar:</td>
            </tr>            
            <td><textarea name="otroDetallarCampanaHidraulica" value=""></textarea></td>

            <tr>
                <th> </th>
                <th>Si</th>
                <th>No</th>
                <th>N/A</th>
            </tr>
            <td>Si se usado anclajes instalados a bloques de concreto mediante disparo de pistola (pólvora) <br/>
                ¿se ha comprobado satisfactoriamente una muestra?</td>
            <td><input type="radio" name="campanaHidraulicaFuncionaCorrect" value="si" /></td>
            <td><input type="radio" name="campanaHidraulicaFuncionaCorrect" value="no" /></td>
            <td><input type="radio" name="campanaHidraulicaFuncionaCorrect" value="na" /></td>

            <tr>
                <td>Si no, justifique:</td>
            </tr>            
            <td><textarea name="justificacionCampanaHidraulica" value=""></textarea></td>
      </tbody>
    </table>
  );

  const placaDatosHidraulicosTabla = (
    <table>
      <tbody>
      <th>Placa de datos hidráulicos</th>
            <tr>
                <th> </th>
                <th>Si</th>
                <th>No</th>
                <th>N/A</th>
            </tr>
            <td>Se provee la placa de datos hidráulicos</td>
            <td><input type="radio" name="campanaHidraulicaFuncionaCorrect" value="si" /></td>
            <td><input type="radio" name="campanaHidraulicaFuncionaCorrect" value="no" /></td>
            <td><input type="radio" name="campanaHidraulicaFuncionaCorrect" value="na" /></td>

            <tr>
                <td>Si no, justifique:</td>
            </tr>            
            <td><textarea name="justificacionPlacaDatosHidraulicos" value=""></textarea></td>
      </tbody>
    </table>
  );

  const comentarioTabla = (
    <table>
      <tbody>
        <th>Comentario</th>
        <tr><td>PERSONAS PRESENTES</td></tr>
        <tr><td>Fecha en la que se dejo el sistema operativo con todas las válvulas<br/>
                en la posición normal de funcionamiento </td></tr>
            <td>Fecha: <input type="date" /></td>
            <tr><td>Hora: <input type="time" /></td></tr>
      </tbody>
    </table>
  );

  const firmasTabla = (
    <table>
      <tbody>
        <th>Firmas</th>
          <tr><th>Nombre del contratista instalador: <input type="text"/></th></tr>
          <tr><td>Pruebas presenciadas por</td></tr>
          <td> Nombre <br/>                  
               <input type="text" name="nombreFirmaContratistaInstalador1"/> 
               <br/> 
               <input type="text" name="nombreFirmaContratistaInstalador2"/> 
               <br/> 
               <input type="text" name="nombreFirmaContratistaInstalador3"/>  
               <br/> 
               <input type="text" name="nombreFirmaContratistaInstalador4"/>                           
            </td>
            <td> Empresa <br/>                  
            <input type="text" name="empresaFirmaContratistaInstalador1"/> 
            <br/> 
            <input type="text" name="empresaFirmaContratistaInstalador2"/> 
            <br/> 
            <input type="text" name="empresaFirmaContratistaInstalador3"/>  
            <br/> 
            <input type="text" name="empresaFirmaContratistaInstalador4"/>                         
            </td>
            <td> Representante <br/>                   
                <input type="text" name="representanteFirmaContratistaInstalador1"/> 
                <br/> 
                <input type="text" name="representanteFirmaContratistaInstalador2"/> 
                <br/> 
                <input type="text" name="representanteFirmaContratistaInstalador3"/>  
                <br/> 
                <input type="text" name="representanteFirmaContratistaInstalador4"/>                         
            </td>
            <td> Fecha <br/>                   
                <input type="text" name="fechaFirmaContratistaInstalador1"/> 
                <br/> 
                <input type="text" name="fechaFirmaContratistaInstalador2"/> 
                <br/> 
                <input type="text" name="fechaFirmaContratistaInstalador3"/> 
                <br/> 
                <input type="text" name="fechaFirmaContratistaInstalador4"/>                         
            </td>
            <tr>                
              <tr><td>Observaciones: <textarea name="observacionesFirmaContratistaInstalador4" value=""></textarea></td></tr> 
            </tr>
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
          <label htmlFor="fechaHora">Fecha y Hora:</label>
          <input type="datetime-local" id="fechaHora" name="fechaHora" value={fechaHora} readOnly required />
        </div>
        <div>
          <label htmlFor="direccion">Dirección:</label>
          <input type="text" id="direccion" name="direccion" required />
        </div>
        <div>
          <label>
            Tipo de prueba:
            <select value={tipoPrueba} onChange={handleTipoPruebaChange}>
              <option value="Recepción del sistema">Recepción del sistema</option>
              <option value="Pruebas periódicas anuales">Pruebas periódicas anuales</option>
            </select>
          </label>
          {mostrarInformacionGeneral && (
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
              <th>Se colocó en el expediente del proyecto lo siguiente:</th>
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
              <th>En caso haya habido soldadura se colocó:</th>
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
              <th>Observaciones:</th>
            </tr>
            <tr>
              <td><textarea name="observaciones"></textarea></td>
            </tr>
          </tbody>
        </table>
        )}
        </div>        
        </form>

      {mostrarInformacionGeneral}
      {localizacionSistemaTabla}
      {rociadoresTabla}
      {tuberiaAccesoriosTabla}
      {valvulaAlarmaIndicadoresFlujoTabla}
      {datoDispositivosAlarmaTabla}
      {pruebasDispositivosAlarmaTabla}
      {pruebaFuncionamientoSistemasSecosTabla}
      {valvulaDiluvioPreaccionTabla}
      {descripcionPruebasTabla}
      {pruebasTabla}
      {pruebasEnunciadosTabla}
      {presionesMultipleValvulaTabla}
      {tiempoRetornarPresionEstaticaTabla}
      {valvulaReguladoraPresionTabla}
      {presionEnSistemaTabla}
      {preguntasPruebasTabla}
      {placaDatosHidraulicosTabla}
      {comentarioTabla}
      {firmasTabla}
      <button type="button" onClick={handleGuardar}>Guardar</button>
    </div>
  );
};

export default FormularioNFPA13;
