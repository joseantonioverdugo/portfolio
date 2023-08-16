import { useContext } from 'react'

import { GlobalContext } from '../../provider/Provider.jsx'
import './footer.scss'

export default function Footer() {
  const { footer } = useContext(GlobalContext)
  const { href, p } = footer
  return (
    <footer className='Footer'>
      <a className='Footer-a' href={href} target='_blank' rel='noreferrer'>
        <p className='Footer-p'>{p}</p>
      </a>
    </footer>
  )
}
