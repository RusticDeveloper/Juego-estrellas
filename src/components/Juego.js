import React, { useState, useEffect } from 'react';
import utils from '../math-utils';

import MostrarEstrellas from './MostrarEstrellas';
import NumeroJugado from './NumeroJugado';
import JugarDeNuevo from './otroJuego';
import EstadoJuego from './estadoInicial';



const Juego = (props) => {
// valores iniciales del juego obtenidos del valor dificultad
  const {
    stars,
    availableNums,
    candidateNums,
    secondsLeft,
    setGameState,
  } = EstadoJuego(props.valorInicial);//aqui se pasa el valor de dificultad
  //constante que especifica si los numeros restantes son validos 
  const candidatesAreWrong = utils.sum(candidateNums) > stars;
  //constante que especifica el estado del juego
  const gameStatus =
    availableNums.length === 0 ? 'won' : secondsLeft === 0 ? 'lost' : 'active';
    // constante que especifica si el boton presionado es candidato, errado o disponible
  const estadoNumero = (number) => {
    if (!availableNums.includes(number)) {
      return 'used';
    }
    if (candidateNums.includes(number)) {
      return candidatesAreWrong ? 'wrong' : 'candidate';
    }
    return 'available';
  };
  //metodo especifica el comportamiento de los numeros al ser presionado
  const clickNumero = (number, currentStatus) => {
    if (currentStatus === 'used' || secondsLeft === 0) {
      return;
    }
// funcion que crea nuevos numeros numeros candidatos
    const newCandidateNums =
      currentStatus === 'available'
        ? candidateNums.concat(number)
        : candidateNums.filter((cn) => cn !== number);

    setGameState(newCandidateNums);
  };
  //funcion que pasa el puntaje obtenido y reinicia el juego al presionar jugar de nuevo
  const saludar=()=>{
    props.startNewGame();
    props.puntaje(secondsLeft);
  }
// renderizacion del juego
  return (
    <div className="game">
      <div className="help">
        Escoja uno o mas numeros que sumen el numero de estrellas 
      </div>
      <div className="body">
         <div className="left">
          {gameStatus !== 'active' ? (
            
            <JugarDeNuevo onClick={saludar} resultado={secondsLeft} funcion={props.puntaje} gameStatus={gameStatus} />
            
          ) : (
            <MostrarEstrellas count={stars} />
          )}
        </div>
        <div className="right">
          {
          utils.range(1, props.valorInicial).map((number) => (
            <NumeroJugado
              key={number}
              status={estadoNumero(number)}
              number={number}
              onClick={clickNumero}
            />
          ))}
        </div>
      </div>
      <div className="timer">tiempo restante: {secondsLeft}</div>
      <div>
      </div>
    </div>
  );
};
export default Juego;
