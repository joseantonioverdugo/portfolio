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
            <img
              className='Proyectos-img'
              src={proyecto.img}
              alt={proyecto.alt}
              loading='lazy'
            />
            <div className='Proyectos-prueba'>
              <h4 className='Proyectos-h4'>{proyecto.title}</h4>
              <p className='Proyectos-p'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                adipisci numquam ipsum harum ea tenetur placeat dignissimos
                explicabo vero atque autem unde dolorum.
              </p>
              <div className='Proyectos-div'>
                <a className='Proyectos-a' href='#'>
                  Github
                </a>
                <a className='Proyectos-a' href='#'>
                  Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
    // <section className='Proyectos' id='proyectos'>
    //   <h2 className='Proyectos-h2'>Proyectos</h2>
    //   <div className='Proyectos-grid'>
    //     {proyectos.map((proyecto) => (
    //       <article className='Proyectos-article' key={proyecto.id}>
    //         <a
    //           className='Proyectos-a'
    //           href={proyecto.href}
    //           target='_blank'
    //           rel='noreferrer'>
    //           <img
    //             className='Proyectos-img'
    //             src={proyecto.img}
    //             alt={proyecto.alt}
    //             loading='lazy'
    //           />
    //           <h4 className='Proyectos-h4'>{proyecto.title}</h4>
    //         </a>
    //       </article>
    //     ))}
    //   </div>
    // </section>
  )
}

// ;<a
//   className='Proyectos-a'
//   href={proyecto.href}
//   target='_blank'
//   rel='noreferrer'></a>
