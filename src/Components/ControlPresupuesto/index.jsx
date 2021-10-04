import { estiloPresupuesto } from "../Helper"

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

export default ControlPresupuesto