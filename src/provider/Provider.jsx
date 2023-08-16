import { createContext } from 'react'
import { v4 as uuidv4 } from 'uuid'

const bbdd = {
  navbar: {
    logo: {
      title: 'LOGO',
      href: '#home',
    },
    links: [
      {
        id: uuidv4(),
        title: 'Proyectos',
        href: '#proyectos',
      },
      {
        id: uuidv4(),
        title: 'Sobre mí',
        href: '#about',
      },
      {
        id: uuidv4(),
        title: 'Contacto',
        href: '#contacto',
      },
    ],
  },

  principal: {
    h1: 'José Antonio Verdugo',
    h2: 'Full Stack Developer',
    buttons: [
      {
        id: uuidv4(),
        title: 'Visitar mi Github',
        href: 'https://github.com/joseantonioverdugo',
      },
      {
        id: uuidv4(),
        title: 'Visitar mi Linkedin',
        href: 'https://www.linkedin.com/in/joseantonioverdugo/',
      },
    ],
  },

  proyectos: [
    {
      id: uuidv4(),
      title: 'Country Quiz',
      href: 'https://country-quiz-joseantonioverdugo.vercel.app/',
      img: '../../public/country-quiz.png',
      alt: 'Country Quiz',
    },
    {
      id: uuidv4(),
      title: 'Quote Generator',
      href: 'https://quote-generator-joseantonioverdugo.vercel.app/',
      img: '../../public/quote-generator.jpg',
      alt: 'Quote Generator',
    },
    {
      id: uuidv4(),
      title: 'Country Quiz',
      href: 'https://country-quiz-joseantonioverdugo.vercel.app/',
      img: '../../public/country-quiz.png',
      alt: 'Country Quiz',
    },
    {
      id: uuidv4(),
      title: 'Quote Generator',
      href: 'https://quote-generator-joseantonioverdugo.vercel.app/',
      img: '../../public/quote-generator.jpg',
      alt: 'Quote Generator',
    },
  ],
  about: {
    h2: 'Sobre mí',
    p: 'Desarrollador Full Stack centrado en la creación de aplicaciones web robustas y funcionales; enfocado principalmente en el desarrollo web, adquiriendo habilidades en diferentes tecnologías y frameworks como HTML, CSS, SASS, JavaScript, React, Python, Flask, SQLAlquemy, PostgreSQL.',
  },
  contacto: {
    h2: 'Contacto',
    p: 'Si quieres ponerte en contacto conmigo, puedes hacerlo a través de mi correo electrónico:',
  },
  footer: {
    href: 'https://github.com/joseantonioverdugo',
    p: 'Creado por José Antonio Verdugo',
  },
}

export const GlobalContext = createContext(bbdd)

export const Provider = ({ children }) => {
  return (
    <GlobalContext.Provider value={bbdd}>{children}</GlobalContext.Provider>
  )
}
