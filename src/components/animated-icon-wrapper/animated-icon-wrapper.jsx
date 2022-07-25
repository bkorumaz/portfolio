import React from "react";
import { motion } from "framer-motion";

const AnimatedIconWrapper = ({ children, className }) => {
  return (
    <motion.div
      class={className}
      whileHover={{
        scale: 1.1,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedIconWrapper;
