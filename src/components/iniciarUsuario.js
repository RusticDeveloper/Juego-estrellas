import React, { useState, useEffect } from 'react';
//Componente que pide los valores de nombre de usuario y didicultad(numero de estrellas)
 const PreferenciasUsuario = ({printval, changeValue1,changeValue2}) => {
    return(
    <div className='userDataModal'>
        <div className='UserName'>
            <label>Tu nombre aqui👉👉</label>
            <input key='alias'
            placeholder='Ingrese su nombre'
            
            onChange={event=>{changeValue1(event.target.value)}}
            required
            />
        </div>
        <div className='numbers'>
            <label>Elige la dificultad 👉👉</label>
            <input key='numberChoise'
            type='number'
            min='1'
            max='20'
            onChange={event=>{changeValue2(event.target.value)}}
            required
            />
        </div>
        <button onClick={printval}>Hecho</button>
    </div>
    );
}

export default PreferenciasUsuario;