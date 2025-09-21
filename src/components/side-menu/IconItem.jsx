import React from "react";
import { motion } from "motion/react";

function IconItem({ icon }) {
  return (
    <motion.span
      variants={{
        closed: {
          opacity: 0,
          x: 30,
        },
        open: {
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
