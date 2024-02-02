import "./hero.scss";
import { motion } from "framer-motion";

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
const sliderVariants = {
  initial: {
    x: "100%",
  },
  animate: {
    x: "-290%",
    transition: {
      repeat: Infinity,
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Siddhant Misra</motion.h2>
          <motion.h1 variants={textVariants}>
            Developer and Tech Enthusiast
          </motion.h1>
          <motion.h5 variants={textVariants}>
            I love building solutions that focuses on solving a problem. I love writing clean, scalable and well-commented code. Everyone should be open to cross-platform and be comfortable working
            with different teams.
          </motion.h5>
          <motion.div variants={textVariants} className="buttons">
            <motion.button
              variants={textVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.a href={`#Projects`}>See my Projects</motion.a>
            </motion.button>
            <motion.button
              variants={textVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.a href={`#Contact`}> Contact Me</motion.a>
            </motion.button>
            <motion.button>
              <motion.a href="/Siddhant-Misra-Resume.pdf" download>
                Download my Resume          
              </motion.a>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Siddhant Misra
      </motion.div>
      <div className="imageContainer">
        <img src="/hero1.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
