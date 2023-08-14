import { useContext } from 'react'
import { GlobalContext } from '../../provider/Provider.jsx'
import './about.scss'

export default function About() {
  const { about } = useContext(GlobalContext)
  const { h2, p } = about

  return (
    <section className='About' id='about'>
      <h2 className='About-h2'>{h2}</h2>
      <div className='About-div'>
        <p className='About-p'>{p}</p>
      </div>
    </section>
  )
}
