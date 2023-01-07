import React from 'react';
//componente que reinicia el juego
const JugarDeNuevo = (props) => (
  
  <div className="game-done" >
    <div
      className="message"
      style={{ color: props.gameStatus === 'lost' ? 'red' : 'green' }}
    >
      {props.gameStatus === 'lost' ? 'Juego Terminado' : 'Bien Hecho'}
    </div>
    <button onClick={props.onClick}>Jugar de nuevo</button>
  </div>
);

export default JugarDeNuevo;
