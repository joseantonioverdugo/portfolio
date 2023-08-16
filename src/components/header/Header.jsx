import { useContext } from 'react'
import { GlobalContext } from '../../provider/Provider.jsx'
import './header.scss'

export default function Header() {
  const { navbar } = useContext(GlobalContext)

  const { logo, links } = navbar

  return (
    <header className='Header'>
      <a href={logo.href} className='Header-logo'>
        {logo.title}
      </a>
      <nav className='Header-navbar'>
        <ul className='Header-ul'>
          {links.map((link) => (
            <li className='Header-li' key={link.id}>
              <a className='Header-a' href={link.href}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <a href='#' className='Header-cv'>
          CV
        </a>
      </nav>
    </header>
  )
}

//  <nav className='Navbar'>
//    <a href={logo.href} className='Navbar-logo'>
//      {logo.title}
//    </a>
//    <ul className='Navbar-ul'>
//      {links.map((link) => (
//        <li className='Navbar-li' key={link.id}>
//          <a className='Navbar-a' href={link.href}>
//            {link.title}
//          </a>
//        </li>
//      ))}
//    </ul>
//  </nav>
