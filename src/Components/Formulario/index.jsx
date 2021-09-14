
import { useState } from "react";

const Formulario = () =>{

    return(
        <>
            <form>
                <h2>Gatos</h2>
                <label>Nombre del Gasto</label>
                <input
                type='text'
                className='u-full-width'
                placeholder='Eje: Movilidad'
                />
                <label>Cantidad del Gasto</label>
                <input
                type='number'
                className='u-full-width'
                placeholder='Eje: 30'
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
export default Formulario