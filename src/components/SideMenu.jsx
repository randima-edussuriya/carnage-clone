import React from "react";
import logo from "../assets/logo.jpg";
import CloseIcon from "./icons/CloseIcon";
import SideMenuItem from "./SideMenuItem";
import UserIcon from "./icons/UserIcon";
import InstagramIcon from "./icons/InstagramIcon";
import TiktokIcon from "./icons/TiktokIcon";
import YouTubeIcon from "./icons/YouTubeIcon";
import { motion } from "motion/react";

const menuItems = [
  {
    name: "MEN",
    subItem: [
      "SHOP ALL",
      "TANKS",
      "COMPRESSIONS",
      "HOODIES & JACKETS",
      "SHORTS",
      "JEANS",
      "JOGGERS & PANTS",
      "UNDERWEAR",
      "COLLECTIONS",
    ],
  },
  {
    name: "WOMEN",
    subItem: [
      "SHOP ALL",
      "T-SHIRTS",
      "POLOS",
      "CROP TOPS",
      "TANKS",
      "LEGGINGS",
      "SKIRTS",
      "SHORTS",
      "HOODIES & JACKETS",
      "JOGGERS & PANTS",
      "ONE PIECE",
      "SPORTS BRA",
      "UNDERWEAR",
      "COLLECTIONS",
    ],
  },
  {
    name: "ACCESSORIES",
    subItem: [
      "SHOP ALL",
      "HATS & CAPS",
      "SLIDES",
      "JEWELLERY",
      "SOCKS",
      "BOTTLES & TUMBLERS",
      "BAGS",
      "MERCH",
    ],
  },
  {
    name: "GIFTS",
    subItem: [],
  },
];

function SideMenu({ isSideMenuOpen, setIsSideMenuOpen }) {
  if (!isSideMenuOpen) return null;
  return (
    <>
      {/* -------------------------------------------------------
                backdrop of side menu
        --------------------------------------------------------- */}
      <motion.div
        initial={{
          opacity: 0,
          zIndex: 0,
        }}
        animate={{
          opacity: isSideMenuOpen ? 1 : 0,
          zIndex: isSideMenuOpen ? 15 : 0,
        }}
        className="fixed top-0 w-full h-screen bg-black/40"
      ></motion.div>

      {/* -------------------------------------------------------
                side menu
        --------------------------------------------------------- */}
      <motion.div
        initial={{
          x: 500,
        }}
        animate={{
          x: isSideMenuOpen ? 0 : 500,
        }}
        transition={{
          type: "tween",
          duration: 0.4,
        }}
        className="bg-white/95 h-full w-[80%] fixed top-0 right-0 z-20"
      >
        {/* -------------------------------------------------------
                side menu header
        --------------------------------------------------------- */}
        <div className="flex justify-between items-center min-h-[64px] px-4">
          <img src={logo} alt="logo" className="h-[20px] w-[80px]" />
          <CloseIcon
            thinStroke="stroke-[1.5px]"
            setIsSideMenuOpen={setIsSideMenuOpen}
          />
        </div>
        {/* -------------------------------------------------------
                side menu contents
        --------------------------------------------------------- */}
        <div className="h-full px-4 mt-2">
          {menuItems.length > 0 &&
            menuItems.map((item) => (
              <SideMenuItem
                key={item.name}
                name={item.name}
                subItem={item.subItem}
              />
            ))}
          <SideMenuItem name="Account" leftIcon={<UserIcon />} noBorder />
          <div className="flex items-center gap-4">
            <InstagramIcon />
            <TiktokIcon />
            <YouTubeIcon />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default SideMenu;
