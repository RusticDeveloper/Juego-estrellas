import React from 'react';
import utils from '../math-utils';
//componente que crea las estrellas
const MostrarEstrellas = (props) => (
  <>
    {utils.range(1, props.count).map((starId) => (
      <div key={starId} className="star" />
    ))}
  </>
);

export default MostrarEstrellas;
