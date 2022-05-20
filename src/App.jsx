import './stylesheets/App.css';
import Testimony from './testimony.jsx';

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos de FreeCodeCamp</h1>
      <Testimony />
    </div>
    </div>
  );
}

export default App;
