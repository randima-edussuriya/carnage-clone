import React from "react";
import { motion } from "motion/react";

function PlusMinusIcon({ isSubItemOpen, icon }) {
  return (
    <motion.span
      initial={{ rotate: 0 }}
      animate={{ rotate: isSubItemOpen ? 180 : 0 }}
      transition={{
        type: "tween",
        duration: 0.2,
      }}
    >
      {icon}
    </motion.span>
  );
}

export default PlusMinusIcon;
