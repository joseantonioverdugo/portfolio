import { useContext } from 'react'
import { GlobalContext } from '../../provider/Provider.jsx'
import Boton from '../Boton.jsx'
import './principal.scss'

const Principal = () => {
  const { principal } = useContext(GlobalContext)
  const { h1, h2, buttons } = principal

  return (
    <section>
      <div className='Principal'>
        <h1 className='Principal-h1'>{h1}</h1>
        <h2 className='Principal-h2'>{h2}</h2>
      </div>
      <ul className='Principal-ul'>
        {buttons.map((button) => (
          <li className='Principal-li' key={button.id}>
            <Boton id={button.id} title={button.title} href={button.href} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Principal
