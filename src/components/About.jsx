import { useContext } from 'react'
import { GlobalContext } from './../provider/Provider.jsx'

export default function About() {
  const { about } = useContext(GlobalContext)
  const { h2, p } = about

  return (
    <section id='about'>
      <h2>{h2}</h2>
      <p>{p}</p>
    </section>
  )
}
