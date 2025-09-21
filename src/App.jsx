import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import CartSlider from "./components/CartSlider";
import SearchBar from "./components/SearchBar";
import SideMenu from "./components/side-menu/SideMenu";

function App() {
  const [isCartSliderOpen, setIsCartSliderOpen] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <div>
      <NavBar
        setIsCartSliderOpen={setIsCartSliderOpen}
        setIsSearchBarOpen={setIsSearchBarOpen}
        setIsSideMenuOpen={setIsSideMenuOpen}
      />
      <SearchBar
        isSearchBarOpen={isSearchBarOpen}
        setIsSearchBarOpen={setIsSearchBarOpen}
      />
      <CartSlider
        isCartSliderOpen={isCartSliderOpen}
        setIsCartSliderOpen={setIsCartSliderOpen}
      />
      <SideMenu
        isSideMenuOpen={isSideMenuOpen}
        setIsSideMenuOpen={setIsSideMenuOpen}
      />
      <Hero />
    </div>
  );
}

export default App;
