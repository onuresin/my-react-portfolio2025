import { useState } from 'react'
import './App.css'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import ContactModal from './components/ContactModal'

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className="main-container">
        <Header onContactClick={() => setModalOpen(true)} />
        <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
        <Hero />
        <Experience />
        <Projects />
        <Footer />
      </div> 
    </>
  )
}

export default App
