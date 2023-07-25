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
        title: 'Sobre mí',
        href: '#about',
      },
      {
        id: uuidv4(),
        title: 'Proyectos',
        href: '#proyectos',
      },
      {
        id: uuidv4(),
        title: 'Contacto',
        href: '#home',
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
      img: 'https://i.imgur.com/3Q1QZ0F.png',
      alt: 'Country Quiz',
    },
    {
      id: uuidv4(),
      title: 'Quote Generator',
      href: 'https://quote-generator-joseantonioverdugo.vercel.app/',
      img: 'https://i.imgur.com/3Q1QZ0F.png',
      alt: 'Quote Generator',
    },
  ],
}

export const GlobalContext = createContext(bbdd)

export const Provider = ({ children }) => {
  return (
    <GlobalContext.Provider value={bbdd}>{children}</GlobalContext.Provider>
  )
}
