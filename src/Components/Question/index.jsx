import Error from '../Error'
import {useState} from 'react'


const Question = ({guardarPresupuesto, guardarSobrante, actualizarPregunta}) =>{

    const [cantidad, setCantidad] = useState(0)
    const [error, setError] = useState(false)

    const definirPresupuesto = e =>{
        setCantidad(parseInt(e.target.value, 10))
    }
    const agregarPresupuesto= e =>{
        e.preventDefault();
        if(cantidad < 1 || isNaN(cantidad)){
            setError(true)
            return;
        } 
        // Pasa la validación
        setError(false)
        guardarPresupuesto(cantidad)
        guardarSobrante(cantidad)
        actualizarPregunta(false)
        
    }
    return (
        <>
            <h2>Indicar Tu Presupuesto</h2>
            {error ? <Error 
            mensaje='Volver Ingresar el valor'
            />: null}
            <form
            onSubmit={agregarPresupuesto}
            >
                <input
                type='number'
                className='u-full-width'
                onChange={definirPresupuesto}
                />
                <input
                type='submit'
                className='button-primary u-full-width'
                value='Agregar el Presupuesto'
                />
            </form>
        </>
    )
}

export default Question