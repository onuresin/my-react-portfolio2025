import './App.css'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'

function App() {

  return (
    <>
      <div className="main-container">
        <Header />
        <Hero />
        <Experience />
        <Projects />
        <Footer />
      </div> 
    </>
  )
}

export default App
