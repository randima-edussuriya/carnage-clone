import React from "react";
import { motion } from "motion/react";

function IconItem({ icon }) {
  return (
    <motion.span
      variants={{
        initial: {
          opacity: 0,
          x: 30,
        },
        animate: {
          opacity: 1,
          x: 0,
          transition: {
            type: "tween",
          },
        },
      }}
    >
      {icon}
    </motion.span>
  );
}

export default IconItem;
