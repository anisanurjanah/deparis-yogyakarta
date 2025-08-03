import { useState } from 'react'

import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Menu />
      <Testimonials />
      <Contact />
    </>
  )
}

export default App
