import React from "react";
import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 0.2 + i * 0.3;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 4, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const CloseButton = ({ onClick }) => {
  const strokeWidth = "8";
  const circleRadius = 150; // Set the desired radius for the circle

  return (
    <motion.svg
      width={2 * circleRadius}
      height={2 * circleRadius}
      viewBox={`0 0 ${2 * circleRadius} ${2 * circleRadius}`}
      onClick={onClick}
    >
      {/* Circle around X mark */}
      <motion.circle
        cx={circleRadius}
        cy={circleRadius}
        r={circleRadius - strokeWidth / 2}
        stroke="#ff0055"
        strokeWidth={strokeWidth}
        fill="none"
        animate={{ scale: [0, 1], transition: { duration: 0.8, ease: "easeInOut" } }}
      />

      {/* Red X mark lines */}
      <motion.line
        x1={circleRadius - 30}
        y1={circleRadius - 30}
        x2={circleRadius + 30}
        y2={circleRadius + 30}
        stroke="#ff0055"
        strokeWidth={strokeWidth}
        variants={draw}
        animate="visible"
      />
      <motion.line
        x1={circleRadius - 30}
        y1={circleRadius + 30}
        x2={circleRadius + 30}
        y2={circleRadius - 30}
        stroke="#ff0055"
        strokeWidth={strokeWidth}
        variants={draw}
        animate="visible"
      />
    </motion.svg>
  );
};

export default CloseButton;
