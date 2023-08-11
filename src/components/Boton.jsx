import './principal/principal.scss'

const Boton = ({ id, title, href }) => {
  return (
    <a className='Principal-boton' href={href} target='_blank' rel='noreferrer'>
      {title}
    </a>
  )
}

export default Boton
