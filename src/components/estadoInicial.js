import React, { useState, useEffect } from 'react';
import utils from '../math-utils';
//cariables que establecen el estado inicial del juego, por defecto el tiempo es el doble del numero de dificultad
 const EstadoJuego = (cantidad) => {
    const [stars, setStars] = useState(utils.random(1, cantidad));
    const [availableNums, setAvailableNums] = useState(utils.range(1, cantidad));
    const [candidateNums, setCandidateNums] = useState([]);
    const [secondsLeft, setSecondsLeft] = useState(cantidad*2);
    useEffect(() => {
      if (secondsLeft > 0 && availableNums.length > 0) {
        const timerId = setTimeout(
          () => setSecondsLeft((prevSecondsLeft) => prevSecondsLeft - 1),
          1000
        );
        return () => clearTimeout(timerId);
      }
    }, [secondsLeft, availableNums]);
  
    const setGameState = (newCandidateNums) => {
      if (utils.sum(newCandidateNums) !== stars) {
        setCandidateNums(newCandidateNums);
      } else {
        const newAvailableNums = availableNums.filter(
          (n) => !newCandidateNums.includes(n)
        );
        setStars(utils.randomSumIn(newAvailableNums, cantidad));
        setAvailableNums(newAvailableNums);
        setCandidateNums([]);
      }
    };
  
    return { stars, availableNums, candidateNums, secondsLeft, setGameState };
  };
  export default EstadoJuego;