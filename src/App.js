import Question from './Components/Question'
import {useState} from 'react'
import Formulario from './Components/Formulario'
import Listado from './Components/Listado'

function App() {
  const [presupuesto, guardarPresupuesto] = useState(0)
  const [sobrante, guardarSobrante] = useState(0)
  const [pregunta, actualizarPregunta] = useState(true)
  const [gastos, guardarGastos] = useState([])

  const agregarGast = gasto =>{
    guardarGastos([ ...gastos, gasto])
  }
  console.log(gastos)

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className='contenido-principal contenido'>
          { pregunta ? 
          // Pata que retorne  se coloca entre paréntesis
          <Question 
              guardarPresupuesto={guardarPresupuesto}
              guardarSobrante={guardarSobrante}
              actualizarPregunta={actualizarPregunta}
              />
          :
             <div className='row'>
                    <div className='one-half column'>
                      <Formulario 
                      agregarGast={agregarGast}
                      />
                    </div>
                <div className='one-half column'>
                    <Listado 
                    gastos={gastos}
                    />
                </div>
              </div>
          
          }
        </div>
      </header>
    </div>
  );
}

export default App;
