import { estiloPresupuesto } from "../Helper"
import PropTypes from 'prop-types'

const ControlPresupuesto = ({presupuesto, sobrante}) =>{

    return (
        <>
            <div className='alert alert-primary'>
                Presupuesto: s/. {presupuesto}
            </div>
            <div className={estiloPresupuesto(presupuesto, sobrante)}>
                Sobrante: s/.{sobrante}
            </div>
        </>
    )
}

ControlPresupuesto.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    sobrante: PropTypes.number.isRequired
}

export default ControlPresupuesto