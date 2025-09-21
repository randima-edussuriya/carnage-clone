import React from "react";
import PlusIcon from "./icons/PlusIcon";
import { motion } from "motion/react";
import { animate } from "motion";

function SideMenuItem({ name, subItem, leftIcon, noBorder }) {
  return (
    <motion.div
      variants={{
        initial: {
          opacity: 0,
          x: 25,
        },
        animate: {
          opacity: 1,
          x: 0,
          transition: {
            type: "tween",
          },
        },
      }}
      className={`flex justify-between items-center py-[22px] w-full border-gray-400 ${
        noBorder ? "" : "border-b"
      } cursor-pointer`}
    >
      <div className="be-vietnam-pro-semibold uppercase text-[14px] tracking-wider flex items-center gap-2">
        {leftIcon && leftIcon}
        {name}
      </div>
      {subItem?.length > 0 && <PlusIcon />}
    </motion.div>
  );
}

export default SideMenuItem;
