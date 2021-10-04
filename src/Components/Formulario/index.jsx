
import { useState } from "react";
import Error from '../Error'
import shortid from 'shortid'
import PropTypes from 'prop-types'

const Formulario = ({guardarGasto, setShowGasto}) =>{
    const [nombreGasto, setNombreGasto] = useState('')
    const [cantiGasto, setCantiGasto] = useState(0)
    const [error, actualizarError] = useState(false)

    const definirNombre = e => {
        setNombreGasto(e.target.value)
    }
    const agregarGasto = e =>{
        e.preventDefault()

        // validar
        if(cantiGasto < 1 || isNaN(cantiGasto) || nombreGasto.trim() === ''){
            actualizarError(true)
            return;
        }
        //construir el gasto
        actualizarError(false)
        const gasto = {
            id:shortid.generate(),
            nombreGasto, // tambien puede ser nombreGato: nombreGasto pero como se pondrá lo mismo se puede relizar tal cual
            cantiGasto
        }
        // pasar el gasto al componente principal
        guardarGasto(gasto)
        setShowGasto(true)
        
        // resetear el form
    }
    return(
        <>  
            <form onSubmit={agregarGasto}>
                <h2>Gatos</h2>
                {error ? <Error mensaje='Volver a indicar los valores'/> : null}
                <label>Nombre del Gasto</label>
                <input
                type='text'
                className='u-full-width'
                placeholder='Eje: Movilidad'
                value={nombreGasto}
                onChange={definirNombre}
                />
                <label>Cantidad del Gasto</label>
                <input
                type='number'
                className='u-full-width'
                placeholder='Eje: 30'
                value={cantiGasto}
                onChange={e => setCantiGasto(parseInt(e.target.value, 10))}
                />
                <input
                type='submit'
                className='button-primary u-full-width'
                value='Ingresar tus Gastos'
                />
            </form>
        </>
    )
}

Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired, 
    setShowGasto: PropTypes.func.isRequired
}
export default Formulario