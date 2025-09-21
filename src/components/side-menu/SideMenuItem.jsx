import React, { useState } from "react";
import PlusIcon from "../icons/PlusIcon";
import MinusIcon from "../icons/MinusIcon";
import { motion } from "motion/react";
import PlusMinusIcon from "./PlusMinusIcon";

function SideMenuItem({ name, subItem, leftIcon, noBorder }) {
  const [isSubItemOpen, setIsSubItemOpen] = useState(false);
  return (
    <motion.div
      variants={{
        closed: {
          opacity: 0,
          x: 25,
        },
        open: {
          opacity: 1,
          x: 0,
          transition: {
            type: "tween",
          },
        },
      }}
      className={`py-[22px] w-full border-gray-400 ${
        noBorder ? "" : "border-b"
      } cursor-pointer`}
      onClick={() => setIsSubItemOpen((prev) => !prev)}
    >
      <div className="flex items-center justify-between">
        <div className="be-vietnam-pro-semibold uppercase text-[14px] tracking-wider flex items-center gap-2">
          {leftIcon && leftIcon}
          {name}
        </div>
        {subItem?.length > 0 && (
          <PlusMinusIcon
            isSubItemOpen={isSubItemOpen}
            icon={isSubItemOpen ? <MinusIcon /> : <PlusIcon />}
          />
        )}
      </div>
      <motion.div
        initial={{
          height: 0,
        }}
        animate={{
          height: isSubItemOpen ? "auto" : 0,
        }}
        transition={{
          type: "tween",
        }}
        className="px-3 overflow-hidden"
      >
        <div className="pt-4">
          {subItem?.length > 0 &&
            subItem.map((item) => (
              <div
                key={item}
                className="be-vietnam-pro-medium text-[14px] py-3 tracking-wider"
              >
                {item}
              </div>
            ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default SideMenuItem;
