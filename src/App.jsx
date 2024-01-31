import React from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Contact from './sections/Contact'
import Testimonials from './sections/Testimonials'
import Pricing from './sections/Pricing'
import Footer from './sections/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}

export default App