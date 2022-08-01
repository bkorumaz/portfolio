import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AnimatedIconWrapper = ({ children, className, link }) => {
  const whiteColorset = ["#FFFFFF", "#FFFFFF"];
  const gradientColorset = ["#81FFEF", "#F067B4"];
  const [onHover, setOnHover] = useState(true);

  const [degree, setDegree] = React.useState(270);
  const [delay, setDelay] = useState(20);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setDegree((prevDegree) => (prevDegree < 360 ? prevDegree + 1 : 0)); // <-- Change this line!
    }, delay);
    return () => {
      window.clearInterval(timer);
    };
  }, []);

  const SvgGradient = () => {
    return (
      <svg width="0" height="0">
        <motion.linearGradient
          id="blue-gradient"
          x1="100%"
          y1="100%"
          x2="0%"
          y2="0%"
          animate={{
            gradientTransform: `rotate(${degree % 360})`,
          }}
        >
          <stop
            stopColor={onHover ? gradientColorset[0] : whiteColorset[0]}
            offset="10%"
          />
          <stop
            stopColor={onHover ? gradientColorset[1] : whiteColorset[1]}
            offset="100%"
          />
        </motion.linearGradient>
        {/* <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#a18cd1" offset="0%" />
          <stop stopColor="#fbc2eb" offset="100%" />
        </linearGradient> */}
      </svg>
    );
  };

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
        onHoverStart={(e) => {
          setOnHover(true);
        }}
        onHoverEnd={(e) => {
          setOnHover(false);
        }}
        transition={{
          duration: 0.2,
        }}
        size={"2em"}
        style={{ fill: "url(#blue-gradient)" }}
      >
        <SvgGradient />
        <a target="_blank" rel="noopener noreferrer" href={link}>
          {children}
        </a>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedIconWrapper;
