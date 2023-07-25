import { useContext } from 'react'
import { GlobalContext } from './../provider/Provider.jsx'

export default function Navbar() {
  const { navbar } = useContext(GlobalContext)

  const { logo, links } = navbar

  return (
    <nav>
      <a href={logo.href} className='logo'>
        {logo.title}
      </a>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.href}>{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
