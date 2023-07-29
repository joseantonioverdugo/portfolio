import Principal from './components/Principal'
import Circulos from './components/Circulos'
import Navbar from './components/Navbar'
import Proyectos from './components/Proyectos'
import About from './components/About'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      {/* <Circulos /> */}
      <Navbar />
      <Principal />
      <Proyectos />
      <About />
      <Contacto />
      <Footer />
    </>
  )
}

export default App
