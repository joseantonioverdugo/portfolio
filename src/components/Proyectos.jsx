import { useContext } from 'react'
import { GlobalContext } from './../provider/Provider.jsx'

export default function Proyectos() {
  const { proyectos } = useContext(GlobalContext)

  const { id, title, href, img, alt } = proyectos

  return (
    <section id='proyectos'>
      <h2>Proyectos</h2>
      {proyectos.map((proyecto) => (
        <article key={proyecto.id}>
          <a href={proyecto.href} target='_blank' rel='noreferrer'>
            <img src={proyecto.img} alt={proyecto.alt} loading='lazy' />
            <h4>{proyecto.title}</h4>
          </a>
        </article>
      ))}
    </section>
  )
}
