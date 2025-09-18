import React, { useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import CartSlider from './components/CartSlider'

function App() {
  const [isCartSliderOpen, setIsCartSliderOpen] = useState(false);

  return (
    <div>
      <NavBar setIsCartSliderOpen={setIsCartSliderOpen} />
      <CartSlider isCartSliderOpen={isCartSliderOpen} setIsCartSliderOpen={setIsCartSliderOpen} />
      <Hero />
    </div>
  )
}

export default App