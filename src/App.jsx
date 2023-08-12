import Principal from './components/principal/Principal'
import Circulos from './components/circulos/Circulos'
import Navbar from './components/navbar/Navbar'
import Proyectos from './components/proyectos/Proyectos'
import About from './components/About'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Circulos />
      <Principal />
      <Proyectos />
      <About />
      <Contacto />
      <Footer />
    </>
  )
}

export default App
