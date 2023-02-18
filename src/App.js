
import './App.css';
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import{faCalculator} from "@fortawesome/free-solid-svg-icons";
import Boton from "./componentes/boton"
import Pantalla from './componentes/pantalla';
import BotonClear from './componentes/botonclear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');
  

  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    }else {
      alert("Por favor ingrese valores para realizar los cálculos.");
    }
  };
   <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

  return (
    <div className="App">
      
      <div className="contenedor-logo">

         <h1 className="logo">G_R( <FontAwesomeIcon icon={faCalculator}  style={{height:"70%"}}></FontAwesomeIcon> )</h1>

      </div>
      <div className='contenedor-calculadora'>

        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
          
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>


        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>



        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>


        </div>
        <div className='fila'>

        <BotonClear manejarClear={() => setInput('')}>
            Clear
          </BotonClear>



        </div>



      </div>

    </div>
  );
}

export default App;
