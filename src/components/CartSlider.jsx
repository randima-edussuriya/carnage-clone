import React from "react";
import CloseIconWithBG from "./icons/CloseIconWithBG";
import CartIcons from "./icons/CartIcons";
import { motion } from "motion/react";

function CartSlider({ isCartSliderOpen, setIsCartSliderOpen }) {
  return (
    <motion.div
      initial={{
        x: 500,
      }}
      animate={{
        x: isCartSliderOpen ? 0 : 500,
      }}
      transition={{
        type: "tween",
        duration: 0.15,
      }}
      className="fixed top-0 z-10 flex items-center justify-center w-full h-screen bg-black/80"
    >
      <div className="bg-[#f3f3f3] w-[94%] h-[98%] relative">
        <div className="flex items-center justify-between shadow-sm p-[10px]">
          <CloseIconWithBG setIsCartSliderOpen={setIsCartSliderOpen} />
          <span className="be-vietnam-pro-bold text-[12px] tracking-wider">
            My Cart
          </span>
          <CartIcons noCursorPointer/>
        </div>
        <div className="flex items-center justify-center w-full h-full">
          <div className="flex flex-col items-center -mt-16 gap-7">
            <span className="be-vietnam-pro-bold text-[12px] tracking-widest">
              Your cart is currently empty.
            </span>
            <button className="be-vietnam-pro-bold text-[14px] uppercase cursor-pointer py-[10px] px-[25px] rounded-full bg-white shadow-sm">
              shop
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default CartSlider;
