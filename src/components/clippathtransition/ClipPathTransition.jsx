import React, { useState, useContext, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ClipPathTransition.scss";
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const wrapperVariants = {
  initial: {
    clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
    transition: { duration: 0.4 },
  },
  animate: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: { duration: 0.4, staggerChildren: 0.1 },
  },
  exit: {
    clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
    transition: { duration: 0.4 },
  },
};
const squareVariants = {
  initial: {
    opacity: 0,
    scale: 0.3,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
};
const ClipPathTransition = () => {
  const [selectedSquare, setSelectedSquare] = useState(null);
  useEffect(() => {
    if (selectedSquare) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedSquare]);

  const cardTexts = {
    yellow: {
      header: "Inhance Digital",
      content: "Yellow Inhance lorem ipsum",
    },
    green: {
      header: "Creating Margin",
      content: "Green Creating Margin lorem ipsum",
    },
    blue: {
      header: "PantSuit Professional",
      content: "Blue Pantsuit Lorem Ipsum",
    },
    violet: { header: "The Peach Studio", content: "Peach Lorem Ipsum" },
  };

  const renderSquares = () => {
    const squares = ["yellow", "green", "blue", "violet"];

    return squares.map((color, i) => (
      <motion.div
        key={i}
        className={`square square--${color}`}
        onClick={() => setSelectedSquare(color)}
        variants={squareVariants}
        transition={{ duration: 0.2, type: "spring" }}
      >
        {cardTexts[color].header}
      </motion.div>
    ));
  };

  return (
    <div
      className={`cp-transition cp-transition__container cp-transition__container--${selectedSquare}`}
    >
      <AnimatePresence initial={false} mode="wait">
        <h1 className="heading_card">MIDI IS THE FUTURE</h1>
        {selectedSquare ? (
          <motion.div
            className={`card card__wrapper card__wrapper--${selectedSquare}`}
            key="card"
            variants={wrapperVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="card__header">
              <h2>{cardTexts[selectedSquare].header}</h2>
              <button onClick={() => setSelectedSquare(null)}>X</button>
            </div>
            <div className="card__content">
              <div className="card__text-placeholder">
                {cardTexts[selectedSquare].content}
              </div>
            </div>
            <button
              className="card__button-close"
              onClick={() => setSelectedSquare(null)}
            >
              X
            </button>
          </motion.div>
        ) : (
          <motion.div
            className="cp-transition__squares-wrapper"
            key="squares"
            variants={wrapperVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {renderSquares()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ClipPathTransition;
