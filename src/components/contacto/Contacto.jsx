import { useState, useEffect, useRef } from 'react'
import emailjs from 'emailjs-com'
import { useContext } from 'react'
import { GlobalContext } from '../../provider/Provider.jsx'
import Swal from 'sweetalert2'
import './contacto.scss'

export default function Contacto() {
  const { contacto } = useContext(GlobalContext)
  const { h2, p } = contacto

  const initialForm = {
    user_name: '',
    user_email: '',
    user_message: '',
  }

  const [formValues, setFormValues] = useState(initialForm)
  const [formErrors, setFormErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState(false)

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    let errors = {}
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
    let regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

    if (!formValues.user_name.trim()) {
      errors.user_name = 'Name is required'
    } else if (!regexName.test(formValues.user_name.trim())) {
      errors.user_name = 'Name is invalid'
    }

    if (!formValues.user_email.trim()) {
      errors.user_email = 'Email is required'
    } else if (!regexEmail.test(formValues.user_email.trim())) {
      errors.user_email = 'Email is invalid'
    }

    if (Object.keys(errors).length === 0) {
      emailjs
        .sendForm(
          'service_aikhrxj',
          'template_e5h55me',
          form.current,
          '4QZzQVYfNzMN7L8T2'
        )
        .then((response) => {
          console.log(response)
          setFormValues(initialForm)
          setSuccessMessage(true)

          setTimeout(() => {
            setSuccessMessage(false)
          }, 2000)

          Swal.fire({
            title: '¡Gracias!',
            text: 'Mensaje enviado correctamente',
            icon: 'success',
            showConfirmButton: false,
            timer: 3000,
          })
        })
        .catch((error) => {
          console.error('Error al enviar el correo electrónico:', error)
        })
    }
    setFormErrors(errors)
  }
  return (
    <>
      <section className='Contacto' id='contacto'>
        <h2 className='Contacto-h2'>{h2}</h2>
        <p className='Contacto-p'>{p}</p>
        <form className='Contacto-form' ref={form} onSubmit={sendEmail}>
          <label className='Contacto-label'>Name</label>
          {formErrors.user_name && (
            <p className='Contacto-error'>{formErrors.user_name}</p>
          )}
          <input
            value={formValues.user_name}
            onChange={(e) =>
              setFormValues({ ...formValues, user_name: e.target.value })
            }
            className='Contacto-input'
            type='text'
            name='user_name'
          />
          <label className='Contacto-label'>Email</label>
          {formErrors.user_email && (
            <p className='Contacto-error'>{formErrors.user_email}</p>
          )}
          <input
            value={formValues.user_email}
            onChange={(e) => {
              setFormValues({ ...formValues, user_email: e.target.value })
            }}
            className='Contacto-input'
            type='email'
            name='user_email'
          />
          <label className='Contacto-label'>Message</label>
          <textarea
            value={formValues.user_message}
            onChange={(e) => {
              setFormValues({ ...formValues, user_message: e.target.value })
            }}
            className='Contacto-textArea'
            name='user_message'
            rows='4'
          />
          <input className='Contacto-button' type='submit' value='Send' />
        </form>
      </section>
    </>
  )
}
