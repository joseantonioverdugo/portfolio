import { useContext } from 'react'
import { GlobalContext } from '../../provider/Provider.jsx'
import './Proyectos.scss'

export default function Proyectos() {
  const { proyectos } = useContext(GlobalContext)

  const { id, title, href, img, alt } = proyectos

  return (
    <section className='Proyectos' id='proyectos'>
      <h2 className='Proyectos-h2'>Proyectos</h2>
      <div className='Proyectos-grid'>
        {proyectos.map((proyecto) => (
          <article className='Proyectos-article' key={proyecto.id}>
            <a
              className='Proyectos-a'
              href={proyecto.href}
              target='_blank'
              rel='noreferrer'>
              <img
                className='Proyectos-img'
                src={proyecto.img}
                alt={proyecto.alt}
                loading='lazy'
              />
              <h4 className='Proyectos-h4'>{proyecto.title}</h4>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
