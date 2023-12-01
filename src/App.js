import './App.css';
import Banner from './imagen/imagen.png';
import Lista from './componentes/Lista';

function App() {
  return (
    <div className='tareas'> 
      <div className='banner-caja'> 
        <img 
        src={Banner}
        className='banner-tarea'
        alt='Banner de tareas'  
        />
      </div>
      <div className='tarea-principal'>
        <h2>Tareas a realizar</h2>
        <Lista />
      </div>
    </div>
  );
}

export default App;
