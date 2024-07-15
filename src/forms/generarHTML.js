// generarHTML.js

export const generarHTML = ({
    nombreAreaProtegida,
    fechaHora,
    direccion,
    tipoPrueba,
    instacionPlanos,
    equipamentoEspecificacion,
    personalEncargado,
    planosAsIS,
    especificacionesTecnicas,
    actaCapacitacion,
    manualUsuario,
    documentacion,
    manualMantenimiento,
    programaInspecciones,
    certificadoHidrostatica,
    certificadoLavado,
    certificadoCumplimiento,
    certificadoPersonal,
    observaciones,
    localizacioSistemaNombre1,
    localizacioSistemaNombre2,
    localizacioSistemaNombre3,
    localizacioSistemaNombre4,
    localizacioSistemaNombre5,
    localizacionSistemaEdificaconAlimenta1,
    localizacionSistemaEdificaconAlimenta2,
    localizacionSistemaEdificaconAlimenta3,
    localizacionSistemaEdificaconAlimenta4,
    localizacionSistemaEdificaconAlimenta5
  }) => {
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
          <meta charset="UTF-8">
          <title>Formulario NFPA 13</title>
      </head>
      <body>
          <h1>Formulario NFPA 13</h1>
          <p><strong>Nombre del Área Protegida:</strong> ${nombreAreaProtegida}</p>
          <p><strong>Fecha y Hora:</strong> ${fechaHora}</p>
          <p><strong>Dirección:</strong> ${direccion}</p>
          <p><strong>Tipo de prueba:</strong> ${tipoPrueba}</p>
          <!-- Información General -->
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
                <td>${instacionPlanos === 'si' ? 'X' : ''}</td>
                <td>${instacionPlanos === 'no' ? 'X' : ''}</td>
                <td>${instacionPlanos === 'na' ? 'X' : ''}</td>
              </tr>
              <tr>
                <td>El equipamiento cumple con la especificación técnica</td>
                <td>${equipamentoEspecificacion === 'si' ? 'X' : ''}</td>
                <td>${equipamentoEspecificacion === 'no' ? 'X' : ''}</td>
                <td>${equipamentoEspecificacion === 'na' ? 'X' : ''}</td>
              </tr>
              <tr>
                <td>El personal encargado ha sido capacitado en el manejo u operación del sistema. ¿Se entregó un certificado?</td>
                <td>${personalEncargado === 'si' ? 'X' : ''}</td>
                <td>${personalEncargado === 'no' ? 'X' : ''}</td>
                <td>${personalEncargado === 'na' ? 'X' : ''}</td>
              </tr>
              <tr>
                <th>Se colocó en el expediente del proyecto lo siguiente:</th>
              </tr>
              <tr>
                <td>Planos as-built</td>
                <td>${planosAsIS === 'si' ? 'X' : ''}</td>
                <td>${planosAsIS === 'no' ? 'X' : ''}</td>
                <td>${planosAsIS === 'na' ? 'X' : ''}</td>
              </tr>
              <tr>
                <td>Especificaciones técnicas de los equipos instalados</td>
                <td>${especificacionesTecnicas === 'si' ? 'X' : ''}</td>
                <td>${especificacionesTecnicas === 'no' ? 'X' : ''}</td>
                <td>${especificacionesTecnicas === 'na' ? 'X' : ''}</td>
              </tr>
              <tr>
                <td>Acta de capacitación de uso del sistema al usuario final</td>
                <td>${actaCapacitacion === 'si' ? 'X' : ''}</td>
                <td>${actaCapacitacion === 'no' ? 'X' : ''}</td>
                <td>${actaCapacitacion === 'na' ? 'X' : ''}</td>
              </tr>
              <tr>
                <td>Manual de usuario y componentes del sistema</td>
                <td>${manualUsuario === 'si' ? 'X' : ''}</td>
                <td>${manualUsuario === 'no' ? 'X' : ''}</td>
                <td>${manualUsuario === 'na' ? 'X' : ''}</td>
              </tr>
              <tr>
                <td>Documentación</td>
                <td>${documentacion === 'si' ? 'X' : ''}</td>
                <td>${documentacion === 'no' ? 'X' : ''}</td>
                <td>${documentacion === 'na' ? 'X' : ''}</td>
              </tr>
              <tr>
                <td>Manual de mantenimiento del sistema</td>
                <td>${manualMantenimiento === 'si' ? 'X' : ''}</td>
                <td>${manualMantenimiento === 'no' ? 'X' : ''}</td>
                <td>${manualMantenimiento === 'na' ? 'X' : ''}</td>
              </tr>
              <tr>
                <td>Programa de inspecciones periódicas según NFPA 25</td>
                <td>${programaInspecciones === 'si' ? 'X' : ''}</td>
                <td>${programaInspecciones === 'no' ? 'X' : ''}</td>
                <td>${programaInspecciones === 'na' ? 'X' : ''}</td>
              </tr>
              <tr>
                <td>Certificado de prueba hidrostática</td>
                <td>${certificadoHidrostatica === 'si' ? 'X' : ''}</td>
                <td>${certificadoHidrostatica === 'no' ? 'X' : ''}</td>
                <td>${certificadoHidrostatica === 'na' ? 'X' : ''}</td>
              </tr>
              <tr>
                <td>Certificado de lavado de tuberías</td>
                <td>${certificadoLavado === 'si' ? 'X' : ''}</td>
                <td>${certificadoLavado === 'no' ? 'X' : ''}</td>
                <td>${certificadoLavado === 'na' ? 'X' : ''}</td>
              </tr>
              <tr>
                <th>En caso haya habido soldadura se colocó:</th>
              </tr>
              <tr>
                <td>Certificado de cumplimiento con los procedimientos según AWS B2.1</td>
                <td>${certificadoCumplimiento === 'si' ? 'X' : ''}</td>
                <td>${certificadoCumplimiento === 'no' ? 'X' : ''}</td>
                <td>${certificadoCumplimiento === 'na' ? 'X' : ''}</td>
              </tr>
              <tr>
                <td>Certificado de personal capacitado en procedimientos según AWS B2.1</td>
                <td>${certificadoPersonal === 'si' ? 'X' : ''}</td>
                <td>${certificadoPersonal === 'no' ? 'X' : ''}</td>
                <td>${certificadoPersonal === 'na' ? 'X' : ''}</td>
              </tr>
              <tr>
                <th>Observaciones:</th>
              </tr>
              <tr>
                <td>${observaciones}</td>
              </tr>
            </tbody>
          </table>
          <!-- Tabla de localización del sistema -->
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
                  <span>${localizacioSistemaNombre1}</span> <br />
                  <span>${localizacioSistemaNombre2}</span> <br />
                  <span>${localizacioSistemaNombre3}</span> <br />
                  <span>${localizacioSistemaNombre4}</span> <br />
                  <span>${localizacioSistemaNombre5}</span>
                </td>
                <td>
                  Edificaciones que alimenta <br />
                  <span>${localizacionSistemaEdificaconAlimenta1}</span> <br />
                  <span>${localizacionSistemaEdificaconAlimenta2}</span> <br />
                  <span>${localizacionSistemaEdificaconAlimenta3}</span> <br />
                  <span>${localizacionSistemaEdificaconAlimenta4}</span> <br />
                  <span>${localizacionSistemaEdificaconAlimenta5}</span>                
                </td>
              </tr>
            </tbody>
          </table>
      </body>
      </html>
    `;
  
    return htmlContent;
  };
