import Question from './Components/Question'
import {useState, useEffect} from 'react'
import Formulario from './Components/Formulario'
import Listado from './Components/Listado'
import ControlPresupuesto from './Components/ControlPresupuesto'


function App() {
  const [presupuesto, guardarPresupuesto] = useState(0)
  const [sobrante, guardarSobrante] = useState(0)
  const [pregunta, actualizarPregunta] = useState(true)
  const [gastos, guardarGastos] = useState([])
  const [gasto, guardarGasto] = useState({})
  const [showGasto, setShowGasto] = useState(false)

  useEffect(()=>{
    if(showGasto){
      guardarGastos([ ...gastos, gasto])
    }
    setShowGasto(true)
    const presupuestoActual = sobrante- gasto.cantiGasto
    guardarSobrante(presupuestoActual)
  }, [gasto])


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
                      guardarGasto={guardarGasto}
                      setShowGasto={setShowGasto}
                      />
                    </div>
                <div className='one-half column'>
                    <Listado 
                    gastos={gastos}
                    />
                    <ControlPresupuesto 
                     presupuesto={presupuesto}
                     sobrante={sobrante}
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
