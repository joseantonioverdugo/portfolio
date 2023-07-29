import { useContext } from 'react'
import { GlobalContext } from './../provider/Provider.jsx'

export default function Contacto() {
  const { contacto } = useContext(GlobalContext)
  const { h2, p } = contacto
  return (
    <section id='contacto'>
      <h2>{h2}</h2>
      <p>{p}</p>
      <form>
        <label>
          Nombre:
          <input type='text' name='nombre' required />
        </label>
        <label>
          Email:
          <input type='email' name='email' required />
        </label>
        <label>
          Mensaje:
          <textarea name='mensaje' rows='4' required></textarea>
        </label>
      </form>
    </section>
  )
}
