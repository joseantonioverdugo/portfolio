import { useContext } from 'react'

import { GlobalContext } from './../provider/Provider.jsx'

export default function Footer() {
  const { footer } = useContext(GlobalContext)
  const { p } = footer
  return (
    <footer>
      <p>{p}</p>
    </footer>
  )
}
