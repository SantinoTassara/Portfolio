import React from 'react'
import Hero from './Components/Hero/hero'
import Projects from './Components/Projects/projects'
import Footer from './Components/Footer/footer'
import AboutMe from './Components/About Me/About-me'
import Skills from './Components/Technologies/technologies'
import Certifications from './Components/Certifications/certifications'

function App() {

  return (
    <>
      <Hero />
      <AboutMe />
      <Skills />
      <Certifications />
      <Projects />
      <Footer />
    </>
  )
}

export default App
