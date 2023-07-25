import { useContext } from 'react'
import { GlobalContext } from './../provider/Provider.jsx'
import Boton from './Boton.jsx'

const Principal = () => {
  const { principal } = useContext(GlobalContext)
  const { h1, h2, buttons } = principal

  return (
    <>
      <div>
        <h1>{h1}</h1>
        <h2>{h2}</h2>
      </div>
      <ul>
        {buttons.map((button) => (
          <li key={button.id}>
            <Boton id={button.id} title={button.title} href={button.href} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default Principal
