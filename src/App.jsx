import React, { useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import CartSlider from './components/CartSlider'

function App() {
  return (
    <div>
      <NavBar />
      <CartSlider />
      <Hero />
    </div>
  )
}

export default App