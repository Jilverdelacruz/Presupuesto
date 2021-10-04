import PropTypes from 'prop-types'
const Gastos = ({gasto}) => (
    <li className='gastos'>
        <p>{gasto.nombreGasto}
        <span className='gasto'>${gasto.cantiGasto}</span>
        </p>
    </li>
    
)
Gastos.propTypes ={
    gasto: PropTypes.object.isRequired
}
export default Gastos