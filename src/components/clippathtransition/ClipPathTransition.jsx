import React, { useState, useContext, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ClipPathTransition.scss";
import CloseButton from "./closeButton/closeButton";

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
        "Led the end-to-end product management of a First Responder application that digitized the triage process, resulting in a 30% reduction in manual tasks and significantly enhancing emergency response efforts. Oversaw the integration of incident tracking for Electronic Health Records (EHR), ensuring compliance with HIPAA and PII data handling regulations through AWS.",
        "Directed the design and implementation of an administrative dashboard, providing administrators with enhanced control and fostering a more responsive and agile decision-making process. Focused on improving user experience (UX) and responsiveness, and facilitated real-time insights through interactive data visualizations.",
        "Drove the development of a comprehensive Content Management System (CMS), streamlining media asset management and achieving a 32% reduction in overhead and a 60% improvement in application loading speed, thereby enhancing the overall user experience.",
        "Authored detailed product requirements and technical documentation, including compliance procedures for HIPAA and PII data handling, and strategies for integrating Unity/Playcanvas within web applications. This facilitated clear communication and collaborative decision-making with stakeholders, ensuring alignment with organizational objectives.",
        "Managed the planning and delivery of engaging virtual events to showcase application capabilities and enhance market presence across diverse industries. Led cross-functional teams to tailor each virtual experience to client requirements and objectives, ensuring maximum impact and stakeholder satisfaction.",
      ],
    },
    green: {
      id: 1,
      header: "Creating Margin",
      content: [
        "Led the revamp of the company's website, overseeing the development of a modern, user-friendly interface and improved performance, which enhanced user engagement.",
        "Managed the development of proof-of-concept prototypes, showcasing innovative features that contributed to increased client acquisition and revenue growth.",
        "Directed the creation of interactive digital signage solutions for multiple clients, resulting in a 30% increase in company revenue.",
      ],
    },
    blue: {
      id: 2,
      header: "PantSuit Professional",
      content: [
        "Developed and managed a comprehensive product roadmap for the job board and e-commerce platform, outlining key features and functionalities.",
        "Led cross-functional teams in the design and development of the platform, ensuring a seamless user experience and integration with Mailchimp for newsletters and payment gateway APIs.","Oversaw performance optimization strategies, achieving a 30% reduction in load times and a 20% increase in website traffic.",

      ],
    },
    violet: {
      id: 3,
      header: "The Peach Studio",
      content: [
        "Directed the design and development of new website features, including login APIs and user authentication systems, enhancing security and user experience.",
        "Conducted user research and analyzed website traffic data to identify areas for improvement and prioritize feature development.",
        "Managed the implementation of design changes and performance optimizations, resulting in a 60% increase in website traffic and revenue.",
,
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
              <div className="card__text-placeholder">
                <ul>
                  {cardTexts[selectedSquare].content.map((point, index) => (
                    <li key={`point-${index}`}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="card__button-close">
              <CloseButton onClick={() => setSelectedSquare(null)} />
            </div>
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
