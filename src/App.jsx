import Principal from './components/principal/Principal'
import Circulos from './components/Circulos'
import Navbar from './components/navbar/Navbar'
import Proyectos from './components/Proyectos'
import About from './components/About'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      {/* <Circulos /> */}
      <Navbar />
      <div className='Wrapper'>
        <Principal />
        <Proyectos />
        <About />
        <Contacto />
        <Footer />
      </div>
    </>
  )
}

export default App
