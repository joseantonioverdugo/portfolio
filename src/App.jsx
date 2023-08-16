import Principal from './components/principal/Principal'
import Circulos from './components/circulos/Circulos'
import Navbar from './components/navbar/Navbar'
import Proyectos from './components/proyectos/Proyectos'
import About from './components/about/About'
import Contacto from './components/contacto/Contacto'
import Footer from './components/footer/Footer'

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
