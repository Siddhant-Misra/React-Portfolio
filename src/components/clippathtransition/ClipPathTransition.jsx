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
      id: 0,
      header: "Inhance Digital",
      content: [
        "Led the end-to-end development of a First Responder application, which digitized the triage process for emergency responders, resulting in a 30% reduction in manual triaging and significantly enhancing emergency response efforts. Integrated incident tracking for EHR using the Maptiler API, documenting HIPAA and PII data handling through AWS.",
        "Architected a robust admin dashboard using Vue.js, Pinia, and Axios, providing administrators with unparalleled control and fostering a more responsive and agile decision-making process. Utilized Chart.js to generate interactive data visualizations.",
        "Led the development of a comprehensive Content Management System (CMS) utilizing Vue.js, Nuxt, MongoDB, and Firebase Functions, resulting in a 32% reduction in media asset management overhead and a 60% improvement in application loading speed for a seamless user experience.",
        "Proactively documented complex product requirements and features through meticulous technical documentation and proof of concepts, including HIPAA compliance procedures, PII data handling protocols, and Unity/Playcanvas integration within a web application, facilitating clear communication, collaborative decision-making with stakeholders, and ensuring alignment with organizational objectives for a seamless user experience.",
        "Architecting and delivering engaging virtual events, I employed technologies like Webpack, Bootstrap, JavaScript, and jQuery to showcase application capabilities and enhance market presence across diverse industries. Leading cross-functional teams, I ensured all stakeholders' needs were met, tailoring each virtual experience to deliver maximum impact while understanding client requirements and objectives.",
      ],
    },
    green: {
      id: 1,
      header: "Creating Margin",
      content: [
        "Revamped the company's website, ensuring a modern, user-friendly interface and improved website performance.",
        "Developed proof-of-concept prototypes that showcased innovative features and functionalities, contributing to the company's client acquisition and revenue growth.",
        "Built interactive digital signages for multiple clients that increased the companies revenue by 30%",
      ],
    },
    blue: {
      id: 2,
      header: "PantSuit Professional",
      content: [
        "Developed a comprehensive product roadmap outlining the features and functionalities of the job board and e-commerce platform.",
        "Led the design and development of the job board and e-commerce platform, ensuring a seamless user experience and integration with Mailchimp for newsletters and payment gateways APIs.",
        "Implemented performance optimization strategies that resulted in a 30% reduction in load times and a 20% increase in website traffic.",
      ],
    },
    violet: {
      id: 3,
      header: "The Peach Studio",
      content: [
        "Led the design and development of new features for websites, including login APIs and user authentication systems.",
        "Gathered user feedback and analyzed website traffic data to identify areas for improvement and prioritize feature development.",
        "Implemented design changes and performance optimizations that resulted in a 60% increase in website traffic and revenue.",
      ],
    },
  };

  const renderSquares = () => {
    const squares = ["yellow", "green", "blue", "violet"];

    return squares.map((color, index) => (
      <motion.div
        key={`${color}-${index}`}
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
      <AnimatePresence initial={false}>
        <h1 className="heading_card">Work Experience</h1>
        <h4 className="heading_subcard">Click on the card!</h4>
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
              <div
                className="card__text-placeholder"
              >
                <ul>
                  {cardTexts[selectedSquare].content.map((point, index) => (
                    <li key={`point-${index}`}>{point}</li>
                  ))}
                </ul>
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
