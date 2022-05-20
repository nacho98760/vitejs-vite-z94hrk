import React from 'react';
import './stylesheets/testimony.css';

function Testimony(props) {
  return (
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio" src=""/>
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">{props.nombre} en <b>{props.pais}</b></p>
        <p className="cargo-testimonio">{props.cargo} en {props.empresa}</p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimony;
