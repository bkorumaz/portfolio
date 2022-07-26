import React from "react";
import { motion } from "framer-motion";

const AnimatedIconWrapper = ({ children, className }) => {
  return (
    <motion.div
      className={className}
      animate={{
        scale: [1.2, 1.3, 1.4, 1.4, 1.3, 1],
        rotate: [0, 0, 270, 270, 0, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        delay: 0.2,
      }}
      transition={{
        duration: 1.5,
      }}
    >
      <motion.div
        whileHover={{
          scale: 1.2,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default AnimatedIconWrapper;
