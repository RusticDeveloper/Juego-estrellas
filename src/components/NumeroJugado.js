import React from 'react';
//componente que resderiza los botones de numeros y los pinta de un color de acuerdo al estado del juego
const NumeroJugado = (props) => (
  <button
    className="number"
    style={{ backgroundColor: colors[props.status] }}
    onClick={() => props.onClick(props.number, props.status)}
  >
    {props.number}
  </button>
);

// Color Theme
const colors = {
  available: 'lightgray',
  used: 'magenta',
  wrong: 'red',
  candidate: 'lightblue',
};

export default NumeroJugado;
