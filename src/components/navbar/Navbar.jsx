import { useContext } from 'react'
import { GlobalContext } from '../../provider/Provider.jsx'
import './navbar.scss'

export default function Navbar() {
  const { navbar } = useContext(GlobalContext)

  const { logo, links } = navbar

  return (
    <nav className='Navbar'>
      <a href={logo.href} className='Navbar-logo'>
        {logo.title}
      </a>
      <ul className='Navbar-ul'>
        {links.map((link) => (
          <li className='Navbar-li' key={link.id}>
            <a className='Navbar-a' href={link.href}>
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
