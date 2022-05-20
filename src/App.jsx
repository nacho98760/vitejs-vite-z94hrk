import './stylesheets/App.css';
import Testimony from './testimony.jsx';

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos de FreeCodeCamp</h1>
      <Testimony
        nombre="Emma Bostian"
        pais="Suecia"
        cargo="Ingeniera de Software"
        empresa="Spotify"
        testimonio="Siempre he tenido problemas al aprender JavaScript. He tomado muchos
        cursos, pero el curso de FreeCodeCamp fue el que se quedó. Estudiar
        JavaScript, así como estructuras de datos y algoritmos en FreeCodeCamp
        me dió las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software de Spotify."
      />
      <Testimony
        nombre="Shawn Wang"
        pais="Singapur"
        cargo="Ingeniero de Sofware"
        empresa="Amazon"
        testimonio="Da miedo cambiar de carrera. Solo gané la confianza de que podia programar trabajando a través de los cientos de horas de lecciones gratuitas de freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambio mi vida"
      />
      <Testimony
        nombre="Sarah Chima"
        pais="Nigeria"
        cargo="Ingeniera de Sofware"
        empresa="ChatDesk"
        testimonio="freeCodeCamp fue la puerta de entrada a mi carrera como desarrolladora de software. El plan de estudios bien estructurado llevó mis conocimientos de programacion de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble"
      />
    </div>
    </div>
  );
}

export default App;
