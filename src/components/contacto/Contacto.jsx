import { useContext } from 'react'
import { GlobalContext } from '../../provider/Provider.jsx'
import './contacto.scss'

export default function Contacto() {
  const { contacto } = useContext(GlobalContext)
  const { h2, p } = contacto
  return (
    <section className='Contacto' id='contacto'>
      <h2 className='Contacto-h2'>{h2}</h2>
      <p className='Contacto-p'>{p}</p>
      <form className='Contacto-form'>
        <label className='Contacto-label'>
          Nombre:
          <input
            className='Contacto-input'
            type='text'
            name='nombre'
            required
          />
        </label>
        <label className='Contacto-label'>
          Email:
          <input
            className='Contacto-input'
            type='email'
            name='email'
            required
          />
        </label>
        <label className='Contacto-label'>
          Mensaje:
          <textarea
            className='Contacto-textArea'
            name='mensaje'
            rows='4'
            required></textarea>
        </label>
        <button className='Contacto-button' type='submit'>
          Enviar
        </button>
      </form>
    </section>
  )
}
