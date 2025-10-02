import React from 'react'
import Navbar1 from '../Components/Navbar1'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Projects from '../Components/Projects'
import Service from '../Components/Service'
import Contact from '../Components/Contact'
import footer from '../Components/footer'

const App = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 text-white">
      <Navbar1 />

      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Services Section */}
      <section id="service">
        <Service />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      <footer />
    </div>
  )
}

export default App
