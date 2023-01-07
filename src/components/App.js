import React, { useState } from 'react';
import PreferenciasUsuario from './iniciarUsuario';
import Juego from './juego';



const StarMatch = () => {
  // inicializacion de propiedades y metododos
  //valores de dificultad(numero de estrellas) y nombre de usuario
  const [valor, setvalor] = useState();
  const [alias, setalias] = useState('');
//valor que establece si ya se hapresionado el boton de jugar
  const [iniciado, setiniciado] = useState(false);
  // array que contiene los puntajes de cada juego
  const [stat, setstat] = useState([]);
  //funcion para agregar un nuevo puntaje
  const adnewstat = (status) => {
    setstat([...stat, status]);
  }
  // funcion que muestra el puntaje en el tablero
  const MostrarPuntaje = (props) => {
    return (<>{props.stat.map(point => (<div className='puntajes'>{'ganaste ' + point + '🤑 emoji coins\n'}</div>))}</>);
  }
  //funcion que recibe el valida que se haya presionado el boton para empezar el juego
  const imprimirVal = () => {
    setiniciado(true)
  }
  // variable usada para iniciar un juego nuevo
  const [gameId, setGameId] = useState(1);
  //renderiza todos los componentes del juego
  return (
    <>
      <div className='InitialValues'>
        <PreferenciasUsuario
          printval={imprimirVal}
          changeValue1={setalias}
          changeValue2={setvalor}
        />
      </div>
      {
        iniciado === false ? (<div className='aviso'>
          Esperando Datos...
        </div>) : (
          <Juego
            key={gameId}
            puntaje={adnewstat}
            valorInicial={valor}
            startNewGame={() => setGameId(gameId + 1)} />
        )}
      <div className='statsContainer'>
        <div className='nombres'>
          <b>nombre: </b>
          <div className='nome'>{alias}</div>
        </div>
        <div className='puntuacion'>
          <b>puntajes: </b>
          <MostrarPuntaje stat={stat} />
        </div>
      </div>
    </>
  );
};

export default StarMatch;
