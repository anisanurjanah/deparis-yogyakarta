import { useState } from 'react'

import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Testimonials from "./components/Testimonials";
import Order from "./components/Order";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div class="container max-w-screen-xl mx-auto">  
        <Hero />
        {/* <About /> */}
        <Menu />
        <Testimonials />
        <Order />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
