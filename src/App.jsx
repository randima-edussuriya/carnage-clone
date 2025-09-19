import React, { useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import CartSlider from './components/CartSlider'
import SearchBar from './components/SearchBar';

function App() {
  const [isCartSliderOpen, setIsCartSliderOpen] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

  return (
    <div>
      <NavBar setIsCartSliderOpen={setIsCartSliderOpen} setIsSearchBarOpen={setIsSearchBarOpen} />
      <SearchBar isSearchBarOpen={isSearchBarOpen} setIsSearchBarOpen={setIsSearchBarOpen} />
      <CartSlider isCartSliderOpen={isCartSliderOpen} setIsCartSliderOpen={setIsCartSliderOpen} />
      <Hero />
    </div>
  )
}

export default App