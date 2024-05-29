import React from 'react';

const TurnosTabla = ({ turnos, sucursal }) => {
  const horarios = ['09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21'];

  const estaOcupado = (horario, cancha) => {
    return !!turnos.find((turno) => turno.hora.startsWith(horario) && turno.cancha === cancha);
  };

  return (
    <div>
      <h2>Turnos en {sucursal.nombre}</h2>
      <table>
        <thead>
          <tr>
            <th>Horario</th>
            {sucursal.canchas.map((cancha) => (
              <th key={cancha.id}>{cancha.nombre}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {horarios.map((horario) => (
            <tr key={horario}>
              <td>{`${horario}:00`}</td>
              {sucursal.canchas.map((cancha) => (
                <td key={cancha.id}>
                  <button
                    style={{ backgroundColor: estaOcupado(horario, cancha.id) ? 'red' : 'green' }}
                    disabled={estaOcupado(horario, cancha.id)}
                  >
                    {estaOcupado(horario, cancha.id) ? 'Ocupado' : 'Disponible'}
                  </button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TurnosTabla;
