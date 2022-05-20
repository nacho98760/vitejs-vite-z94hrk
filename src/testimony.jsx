import React from 'react';
import './stylesheets/testimony.css';

function Testimony() {
  return (
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio" src=""/>
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">Emma Bostian en Suecia</p>
        <p className="cargo-testimonio">Ingeniera de Software en Spotify</p>
        <p className="texto-testimonio">
          "Siempre he tenido problemas al aprender JavaScript. He tomado muchos
          cursos, pero el curso de FreeCodeCamp fue el que se quedó. Estudiar
          JavaScript, así como estructuras de datos y algoritmos en FreeCodeCamp
          me dió las habilidades y la confianza que necesitaba para conseguir el
          trabajo de mis sueños como ingeniero de software de Spotify."
        </p>
      </div>
    </div>
  );
}

export default Testimony;
