
const Gastos = ({gasto}) => (
    <li className='gastos'>
        <p>{gasto.nombreGasto}
        <span className='gasto'>${gasto.cantiGasto}</span>
        </p>
    </li>
    
)

export default Gastos